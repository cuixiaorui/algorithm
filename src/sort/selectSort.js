let utils = require('../utils/index.js');
/**
 * 选择排序
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
