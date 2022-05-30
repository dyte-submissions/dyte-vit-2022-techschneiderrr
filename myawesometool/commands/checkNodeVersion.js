const https = require('https');
 const csv = require('csv-parser')
 const fs = require('fs')
 const results = [];

function checkNodeVersion(fileName, dependency, version){
    // console.log(fileName);
    // console.log(dependency);
    // console.log(version);
    fs.createReadStream(fileName)
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(results);
        for(i=0;i<1;i++){
            var repo = "https://raw.githubusercontent.com"+results[i].repo.slice(18, )+"/main/package-lock.json";
            console.log(repo);
            https.get(repo, function(res){
                var body = '';
                res.on('data', function(chunk){
                    body += chunk;
                });
                res.on('end', function(){
                    var data = JSON.parse(body);
                    // for(j=0;j<data.packages[''].dependencies.length;j++){
                        
                    // }
                    console.log(data.packages[''].dependencies[dependency].slice(1, ));
                });
            }).on('error', function(e){
                  console.log("Got an error: ", e);
            });
        }
    });
    
}

module.exports = checkNodeVersion;