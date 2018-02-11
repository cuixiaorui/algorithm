let sort = require('./src/sort/index.js');
let fsControl = require('./src/utils/fsControl.js');

var argv = require('minimist')(process.argv.slice(2));
const show = argv.show;
let sortName = argv.sort + 'Sort';

(async function main(){
    let list = await fsControl.readTxt('./res/input.txt');
    exec(list.concat());
})()

function exec(list){
    console.time(sortName);
    sort[sortName](list);
    console.timeEnd(sortName);
    if(show && show.includes('list')){
        console.log(list);
    }
}