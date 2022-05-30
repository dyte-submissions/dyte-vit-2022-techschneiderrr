
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
        for(i=0;i<results.length;i++){
            var repo = "https://raw.githubusercontent.com"+results[i].repo.slice(18, )+"/main/package-lock.json";
            console.log(repo);
        }
    });
    
}

module.exports = checkNodeVersion;