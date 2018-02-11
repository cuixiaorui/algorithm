let utils = require('../utils/index.js');
/**
 * 选择排序
 * 标记出最小的值 然后交换位置（位置基于i的值 变动）
 * 从左到右
 */
function selectSort(list){
    let min;
    let tempIndex;
    let len = list.length;
    for(let i=0; i<len; i++){
        min = list[i];
        tempIndex = i;
        for(let j=i+1; j<len; j++){
            if(list[j] < min){
                min = list[j];
                tempIndex = j;
            }
        }
        utils.exchange(list,tempIndex,i);
    }
}

module.exports = selectSort;
