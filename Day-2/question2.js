const fs = require('fs');
fs.readFile(__filename,()=>{
    console.log('inside IO Queue');
    setTimeout(()=> console.log('time out'),0);
    setImmediate(()=>console.log('check queue'));


});
console.log('1');
