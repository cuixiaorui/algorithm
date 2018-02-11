let utils = require('../utils/index.js');
/**
 * 插入排序
 * 从右到左 计算量越来越小 
 */
function insertSort(list){
    let len = list.length;
    let num;
    let index;
    for(let i=1; i<len; i++){
        index = 0;
        num = list.splice(i,1,null)[0]; //拿出数值
        for(let j=i-1; j>=0; j--){
            if( list[j] > num ){ //list【j】 数据左侧的值   如果左侧的值大于当前的值 右移 否则插入 -进入下一轮循环
                list[j+1] = list[j];
                index++;
            }else{
                list.splice(i-index,1,num);
                break;
            }
        }
    }
}
module.exports = insertSort