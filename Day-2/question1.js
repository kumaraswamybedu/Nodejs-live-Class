

const fs = require('fs');
console.log(__filename,'filename');
const readStream = fs.createReadStream(__filename);

readStream.close();

// Fires when the stream has been closed.closed callback will be called when there is no more data to be read from the stream and the stream is closed
readStream.on('close', () => {
    console.log('closed stream');
});

// Asynchronous I/O operation ,so it will be executed after the synchronous code and microtasks are completed
// fs.readFile(_filename,()=>{
fs.readFile(__filename, () => {
    console.log('file read');
});

console.log('End of synchronous code');










console.log('1');

setTimeout(() => console.log(2), 0);

console.log('3');

process.nextTick(() => console.log(4));

setImmediate(() => console.log(5));

console.log(6);

Promise.resolve().then(() => console.log(7));

//Why?

/*
Synchronous code runs first:
1
3
6
process.nextTick() queue runs:
4
Promise microtasks run:
7
Timers (setTimeout) run:
2
setImmediate() runs:
5
*/