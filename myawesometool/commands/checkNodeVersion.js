
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
            console.log(results[i].repo);
            
        }
    });
    
}


module.exports = checkNodeVersion;