let utils = require('../utils/index.js');
/**
 * 选择排序
 */
function selectSort(list){
    let min;
    let searchNum = 0;
    let tempIndex = 0;
    while(searchNum < list.length){
        min = list[searchNum];
        for(let i=searchNum+1; i<list.length; i++){
            if(list[i] < min){
                min = list[i]
                tempIndex = i;
            }
        }
        utils.exchange(list,tempIndex,searchNum);
        searchNum++;
    }
}

module.exports = selectSort;
