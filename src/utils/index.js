//交换list 2个元素的位置
function exchange(list,a,b){
    if(list && list.length === 0 && a === b) return;
    let temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}

module.exports = {exchange};