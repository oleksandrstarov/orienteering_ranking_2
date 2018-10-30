'use strict';

var request = require('request'),
  cheerio = require('cheerio'),
  iconv = require('iconv-lite'),
  Buffer = require('buffer').Buffer,
  url = 'http://orienteering.kh.ua/Result/Index/tag/1/',
  moment = require('moment');

module.exports.manualImport = function (customURL, callback) {
  var data = [];
  data.push(parseUrl(customURL));
  importCompetitions(data, callback);
};


module.exports.getNewCompetitions = function (competitionsInDB, callback) {
  grabResults(function (error, data) {
    var newResults = filterNewResults(data, competitionsInDB);
    importCompetitions(newResults, callback);
  });
};

function importCompetitions(data, callback) {
  if (data.length === 0) {
    callback('No new Results', []);
    return;
  }
  var newCompetitionsData = [];
  var i = 0;
  //console.log(newResults);
  processCompetition(data[i], processCompetitionCallback);

  function processCompetitionCallback(error, result) {
    if (error) {
      console.error(error);
    }
    //filter duplicated splits-results
    if (!newCompetitionsData.some(comp => comp.id === data[i].id)) {
      newCompetitionsData.push(result);
    }

    if (++i < data.length) {
      processCompetition(data[i], processCompetitionCallback);
    } else {
      callback(null, newCompetitionsData);
    }
  }
}

function grabResults(callback) {
  var availableCompetitions = [];
  request(url, function (error, response, body) {
    if (!error) {

      var $body = cheerio.load(body);

      var filteredResult = '';
      // id 118 == 2015 year///
      $body('table').find('div[id].results-list').each(function (index, element) {
        if ($body(element).parent().find('div[id]').attr('id') >= 118) {
          filteredResult += $body(element).html();
        }
      });

      var $ = cheerio.load('<div>' + filteredResult + '</div>');

      $('div').find('a').each(function (index, element) {
        var link = $(element).attr('href');
        //console.log($(element).html());
        if (link.indexOf('.htm') != -1) {

          if (link.match(/events\/\d+_/)[0].length > 0) {
            availableCompetitions.push(parseUrl(link));
          }
        }
      });
    } else {
      console.log('error: ' + error);
    }

    //console.log(availableCompetitions);
    callback(null, availableCompetitions);
  });
}

function parseUrl(link) {
  if (/events\/\d{3,4}_/.test(link)) {
    return {url: link, id: link.match(/events\/\d+_/)[0].match(/\d+/)[0]};
  }
  return {url: link, id: null};
}

function filterNewResults(allResults, existingResults) {
  return allResults.filter(function (item) {
    var result = existingResults.indexOf(item.id) < 0 && !(/svodniy/i.test(item.url));
    //console.log(result);
    if (!(/svodniy/i.test(item.url))) {
      existingResults.push(item.id);
    }

    return result;
  });
};


function processCompetition(competitionData, callback) {
  //console.log(competitionData);
  var url = competitionData.url;
  request({encoding: null, method: "GET", url: url}, function (error, response, bodyData) {
    if (!error) {
      //console.log(url);

      var body = iconv.decode(new Buffer(bodyData), "win1251");
      var result = {};
      result.id = competitionData.id;
      result.url = url;
      var $ = cheerio.load(body);

      //get type, use correct module to parse
      //(ID, DATE, URL, NAME, TYPE, STATUS, VALID, WEB_ID)

      var type = getFileType($);
      result.type = type;
      result.notes = '';
      if (type === 'SFR') {
        result.isValid = true;
        result.title = $('h1').clone().children().remove().end().text().normalizeTitle();
        result.date = toDate($('h1').text().match(/((\d{2}.){2}(\d{4}|\d{2})|(\d{2}-\D+-\d{2}))/)[0]).withoutTime().toMysqlFormat();
        console.log(result.date, $('h1').text().match(/((\d{2}.){2}(\d{4}|\d{2})|(\d{2}-\D+-\d{2}))/)[0]);
        callback(null, result);

      } else if (type === 'WINORIENT') {
        //parse data from winOrient file
        //possibly should be checked at webpade to get date?
        result.isValid = true;
        if (/(\d{1,2}.){2}(\d{4}|\d{2})/.test($('h1').text())) {
          result.title = $('h1').text().normalizeTitle();
          result.date = toDate($('h1').text().match(/(\d{1,2}.){2}(\d{4}|\d{2})/)[0]).withoutTime().toMysqlFormat();
          callback(null, result);
        } else if (result.id !== null) {
          getInfoFromWebPage(result, function (error, data) {
            if (error) {
              console.log(error);
            }
            result = data;

            callback(null, result);
          });

        } else {
          result.title = $('h1').text().normalizeTitle();
          result.date = null;
          result.isValid = false;
          callback(competitionData.id + ' non-valid', result);
        }

      } else if (type === "MEOS") {
        body = iconv.decode(new Buffer(bodyData), "utf8");
        $ = cheerio.load(body);
        result.isValid = true;

        result.title = $('td.freeheader').text().normalizeTitle();
        result.date = toDate($('td.freeheader').parent().next().children('td').text()).withoutTime().toMysqlFormat();
        callback(null, result);

      } else {
        //possibly should be checked at webpage to get date?
        if (result.id !== null) {
          getInfoFromWebPage(result, function (error, data) {
            if (error) {
              console.log(error);
            }
            result = data;
            result.notes = 'Неизвестный формат данных';
            callback(competitionData.id + ' non-valid', result);
          });

        } else {
          result.title = 'Неизвестные соревнования';
          result.date = null;
          result.isValid = false;
          result.notes = 'Неизвестный формат данных';
          callback(competitionData.id + ' non-valid', result);
        }

      }
    } else {

      console.log('error: ' + error);
      callback(error, null);
    }

  });
}

function getInfoFromWebPage(competition, callback) {
  var url = 'http://orienteering.kh.ua/Event/Read/id/' + competition.id + '/';
  request(url, function (error, response, body) {
    if (!error) {
      var $body = cheerio.load(body);
      var title = $body('span.header-name-inner').text();
      var date = $body('span.header-name-inner-date').text();
      competition.title = title;
      competition.date = toDate(date.match(/(\d{1,2}.){2}(\d{4}|\d{2})/)[0]).toMysqlFormat();

    } else {
      console.log('error: ' + error);
    }

    //console.log(availableCompetitions);
    callback(null, competition);
  });
}


function getFileType($) {
  if (isValidSFR($('span.name').text())) {
    return 'SFR';
  }

  if (isValidWinOrient($('head title').text())) {
    return 'WINORIENT';
  }

  if (isValidMeos($('body p a i').text())) {
    return 'MEOS';
  }
  return 'UNKNOWN';

}

function isValidSFR(string) {
  if (string.indexOf('SFR') != -1) {
    return true;
  }
  return false;
}

function isValidWinOrient(string) {
  if (string.indexOf('WinOrient') != -1) {
    return true;
  }
  return false;
}

function isValidMeos(string) {
  if (string.toLowerCase().indexOf('meos') !== -1) {
    return true;
  }
  return false;
}

function toDate(dateStr) {
  if (dateStr.match(/(\d{2}-\D+-\d{2})/)) {
    return moment.utc(dateStr).toDate();
  }

  let format;

  if (dateStr.match(/(\d{2,4}-\d{2}-\d{2})/)) {
    format = 'YYYY-MM-DD';
  }

  if (dateStr.match(/(\d{2}\.\d{2}\.\d{2,4})/)) {
    format = 'DD.MM.YYYY';
  }

  return moment.utc(dateStr, format).toDate();


  /*var delimeter = dateStr.indexOf('.') !== -1 ? '.' : '-';
  var parts = dateStr.split(delimeter);
  if (!parts.length) {
    return null;
  }
  if (delimeter === '-') {
    // yy-MM-dd yyyy-MM-dd
    return moment.utc((parts[0].length === 2 ? '20' + parts[0] : parts[0], parts[1] - 1, parts[2]), 'yyyy').toDate();
  }
  if (delimeter === '.') {
    //dd.MM.yy dd.MM.yyyy
    return moment.utc(parts[2].length === 2 ? '20' + parts[2] : parts[2], parts[1] - 1, parts[0]).toDate();
  }*/
}



