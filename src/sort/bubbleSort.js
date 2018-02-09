let utils = require('../utils/index.js');
/**
 * 选择排序
 */
function bubbleSort(list){
    let len = list.length;
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            if(list[j] > list[i]){
                utils.exchange(list,j,i);
            }
        }
    }
}

module.exports = bubbleSort;
