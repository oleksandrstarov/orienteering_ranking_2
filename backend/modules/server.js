var express = require('express'),
    http = require('http'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
    db = require('./dbUtils.js'),
    dataUpdater = require('./dataUpdater.js');


this.serverSettings = {
    hostname : '0.0.0.0'
};

var hostname = this.serverSettings.hostname || process.env.IP || process.env.OPENSHIFT_NODEJS_IP  || 'localhost';
var port = this.serverSettings.port || process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT ||  3000;



var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + "./../../dist"));
app.use(bodyParser.json());

app.get('/admin', function(req, res){
    //res.send('Hello World!');
    //console.log('admin');
    /*db.getRunnersList(function(error, data){
         res.end(data);
    });*/
    //res.sendFile('index.html');
    res.sendFile(path.resolve(__dirname + "./../../dist/admin/admin.html"));
});





app.get('/runners', function(req, res){
    //res.send('Hello World!');
    //console.log('getData');
    db.getRunnersList(function(error, data){
        //console.log(data);
         res.end(data);
    });
    //res.sendFile('index.html');
    //res.sendFile(path.resolve(__dirname + './../../dist/index.html'));
});

app.get('/competitions', function(req, res){
    //res.send('Hello World!');
    //console.log('getData');
    db.getCompetitionsList(function(error, data){
         res.end(data);
    });
    //res.sendFile('index.html');
    //res.sendFile(path.resolve(__dirname + './../../dist/index.html'));
});

app.get('/runners/:id', function(req, res){
    //res.send('Hello World!');
    //console.log('getData ' + req.params.id);
    
    db.getRunnerResults(req.params.id, function(error, data){
        //console.log(data);
         res.end(data);
    });
    //res.sendFile('index.html');
    //res.sendFile(path.resolve(__dirname + './../../dist/index.html'));
});

app.get('/competitions/:id', function(req, res){
    //res.send('Hello World!');
     console.log('getData ' + req.params.id);
    db.getCompetitionResults(req.params.id, function(error, data){
         res.end(data);
    });
    //res.sendFile('index.html');
    //res.sendFile(path.resolve(__dirname + './../../dist/index.html'));
});

app.put('/runners/merge', function(req, res){
    console.log(req.body.data);
    
    dataUpdater.mergeDuplicates(req.body.data.main, req.body.data.duplicates, function(error){
        
        db.getRunnersList(function(err, data){
           
             res.end(JSON.stringify({error:error+err, data:data}));
        });
        //getlist
       
    });
    // gets runner main and array of duplicates
    // should update duplicates prop
    // get earliest result of all merged runners
    // drop data from this result 
    //recalculate 
    // send back result with all runners
});

app.put('/runners/update', function(req, res){
    console.log(req.body.data);
    db.updateRunnerDetails(req.body.data, function(error){
        res.end(JSON.stringify({error:error}));
    })
    //  /res.end(JSON.stringify({error:'Under development'}));
});

app.put('/competitions/addCompetition', function(req, res){
    dataUpdater.manualImport(req.body.data, function(error){
        if(error){
            res.end(JSON.stringify({error:error}));
        }else{
             db.getCompetitionsList(function(error, data){
                 res.end(JSON.stringify({data:data, error:null}));
            });
        }
    });
    //should be new comp list
    
});

app.put('/competitions/updateCompetitionDetails', function(req, res){
    db.updateCompetition(req.body.data, function(error){
        res.end(JSON.stringify({data:error}));
    });
});

app.put('/competitions/recalculate', function(req, res){
    dataUpdater.recalculateCompetitions(req.body.data, function(error){
        if(error){
            res.end(JSON.stringify({error:error}));
        }else{
             db.getCompetitionsList(function(error, data){
                 res.end(JSON.stringify({data:data, error:null}));
            });
        }
    });
    //should be new comp list
});

app.get('/stats', function(req, res){
    
    db.getStatistics().then(function(stats){
        res.end(JSON.stringify({stats:stats}));
    }, function(error){
        res.end(JSON.stringify({error:error}));
    });
});





/*
app.get('/dishes', function(req, res){
    res.end(getRespondData('dishes'));
});

app.get('/dishes/:id', function(req, res){
    res.end(getRespondData('dishes', req.params.id));
});

app.get('/promotions/:id', function(req, res){
    res.end(getRespondData('promotions', req.params.id));
});

app.get('/leadership', function(req, res){
    res.end(getRespondData('leadership'));
});

app.get('/leadership/:id', function(req, res){
    res.end(getRespondData('leadership', req.params.id));
});

app.put('/dishes/:id', function(req, res){
    console.log(req.body.comments);
    updateComments(req.body);
    res.end('sucess');
});

app.put('/feedback', function(req, res){
    updateFeedback(req.body);
    res.end('sucess');
});

app.get('/aboutus', function(req, res){
    res.end(getRespondData('leadership'));
});


function getRespondData(param, id){
  
  if(arguments.length > 1){
    return JSON.stringify(db[param][id]);
  }else{
    return JSON.stringify(db[param])
  }
};


function updateComments(data){
  var id = data.id;
  db.dishes[id].comments = data.comments;
}

function updateFeedback(data){
  console.log(data);
  db.feedback.push(data);
  console.log(db.feedback);
}*/


module.exports.startServer = function(){
    app.listen(port, hostname, function(){
        console.log('server running at http://'+hostname+":"+port+"/");
    });
};





