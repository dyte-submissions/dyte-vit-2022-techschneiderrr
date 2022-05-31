const https = require('https');
const csv = require('csv-parser')
const fs = require('fs')
const semver = require('semver')
const results = [];
const Table = require('cli-table3');
var temp = [];
const request = require('sync-request');

var table = new Table({
    head: ['name', 'repo', 'version', 'version_satisfied', 'update_pr']
  , colWidths: [30, 70,20,20,30]
});


function updateNodeVersion(fileName, dependency, version){
    // console.log(fileName);
    // console.log(dependency);
    // console.log(version);
    fs.createReadStream(fileName)
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(Object.values(results[0])[0]);
        for(var i=0;i<results.length;i++){
            temp.push(Object.values(results[i])[0]);
            var repo = "https://raw.githubusercontent.com"+results[i].repo.slice(18, )+"/main/package-lock.json";
            temp.push(results[i].repo);
            var res = request('GET', repo);
            var data = JSON.parse(res.getBody());
            temp.push(data.packages[''].dependencies[dependency].slice(1, ));
            if(semver.gte(data.packages[''].dependencies[dependency].slice(1, ),version)){
                            temp.push('true');
                            temp.push('');
                        }
                        else{
                            temp.push('false');
                            temp.push('new pr url');
                        }
            table.push(temp);
            temp = [] ;
         }
          console.log(table.toString());
    });
}


module.exports = updateNodeVersion;