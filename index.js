let selectSort = require('./src/sort/selectSort.js');
let bubbleSort = require('./src/sort/bubbleSort.js');
let fsControl = require('./src/utils/fsControl.js');
(async function main(){
    let list = await fsControl.readTxt('./res/input.txt');
    exec(list);
})()

function exec(list){
    console.time('selectSort');
    selectSort(list);
    console.timeEnd('selectSort');
    console.log(list);
}