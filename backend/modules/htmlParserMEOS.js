var request = require('request'),
    cheerio = require('cheerio'),
    iconv  = require('iconv-lite'),
    Buffer = require('buffer').Buffer,
    groupSettings = require('./settings.js').getGroupSettings(),
    url = 'http://orienteering.kh.ua/Result/';


module.exports.processCompetition = function(competitionData, callback){
    var url = competitionData.URL;
    request({encoding:null, method: "GET", url: url}, function (error, response, body) {
        if (!error) {
            ////console.log(url);
            
            body = iconv.decode(new Buffer(body), "utf8");
            var $ = prepareHTMLtree(cheerio.load(body));
            competitionData.group = JSON.parse(JSON.stringify(groupSettings));
            
            var isEmpty = true;
            for(var i=0; i<competitionData.group.length; i++){
                competitionData.group[i].data = processResults(competitionData.group[i], $);
                if(competitionData.group[i].data.length === 0){
                    
                   competitionData.group.splice(i,1);
                   i--;
                }else if(isEmpty){
                    isEmpty = false;
                }
            }
            
            if(isEmpty){
                competitionData.NOTES += ' Нет групп для рассчета';
                competitionData.STATUS = 'INVALID';
                ////console.log(result.title);
                callback(competitionData.ID + ' NO VALID GROUPS', competitionData);
                return; 
            }
            callback(null, competitionData);
        } else {
            
            //console.log('error: ' + error);
            callback(error, null);
        }
        
    });
}

function prepareHTMLtree($) {
    var currentClass = '';
     $('tr').each(function(index, element){
        if($(element).children('td').hasClass('header')) {
            currentClass = $(element).children('td:first-child').children('b').text();
        }
        
        $(element).addClass(currentClass);
    });
    //addClass
    return $;
}

function processResultLine(data){
    var resultLine = {
        place: data[0].replace('.', ''),
        fullName: data[1],
        team: data[2],
        result: data[3],
        timeBehind: data[4] || ''
    };
    resultLine = normalizeResultSet(resultLine);
    
    return resultLine;
}



function processResults(group, $){
    var groupResult = [];
    var pattern = [];
  
    if($(getHeaderSerachPattern(group.variants)).length === 0) {
        return groupResult;
    }
    
    var searchPattern = 'tr.'+$(getHeaderSerachPattern(group.variants)).text();
    var resultsRows = $(searchPattern);
    //console.log(resultsRows, resultsRows.length);
    resultsRows.each(function(index, element){
        if (index === 0) {
            return;
        }
        
        var data = [];
        
         $(element).find('td').each(function(i, el){
             data.push($(el).text().trim());
             if($(el).attr('colspan')) {
                 for(var j=1; j<+$(el).attr('colspan'); j++) {
                     data.push('');
                 }
             }
         });
        
       
        var result = processResultLine(data, pattern);
        if(result != null){
            result.sex = group.sex;
            groupResult.push(result);
        }
        
    });
    return groupResult;
}

function getHeaderSerachPattern(variants){
    var searchPattern = ' ';
    variants.forEach(function(variant){
       searchPattern += 'b:contains("'+variant+'"),';
    });
    return searchPattern.substring(0, searchPattern.lastIndexOf(','));
}

function normalizeFullname(name){
    if(!name){
        return;
    }
    name = name.toLowerCase().replace(/\(\d+\)?/, '').trim();
    
    var lastName = name.split(' ')[0] || '';
    var firstName = name.split(' ')[1] || '';
    
    lastName = lastName? lastName.charAt(0).toUpperCase() + lastName.slice(1): '';
    firstName = firstName? firstName.charAt(0).toUpperCase() + firstName.slice(1): '';
    return lastName + ' ' + firstName;
}

function normalizeClub(club){
    club = club.replace(/\'/g, '').replace(/\"/g, '');
    return club.toUpperCase();
}

function normalizeResultSet(resultSet){
    if(resultSet.fullName.toUpperCase().indexOf('В/К') != -1 
    || resultSet.fullName.toUpperCase().indexOf('В\\К') != -1
    || resultSet.fullName.indexOf(' вк')!= -1){
        return null;
    }
    
    resultSet.fullName = normalizeFullname(resultSet.fullName);
    resultSet.team = normalizeClub(resultSet.team);
    resultSet.place = resultSet.place?resultSet.place:'';
    resultSet.place = resultSet.place.replace(/\D+/g, '').trim();
    resultSet.place = resultSet.place?resultSet.place:-1;
    if(resultSet.place == 1) {
        resultSet.timeBehind = '';
    }
    resultSet.birthDate = resultSet.birthDate && resultSet.birthDate.trim().length > 3?resultSet.birthDate.trim().split(" ")[0]:'';
    return resultSet;
    
}