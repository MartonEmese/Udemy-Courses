const fs = require('fs');

const data = fs.readFile('./hello.txt',"utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});

function showMessage(){
    console.log('Finished')
}

showMessage();