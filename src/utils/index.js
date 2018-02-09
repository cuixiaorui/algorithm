//交换list 2个元素的位置
function exchange(list,a,b){
    let temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}

module.exports = {exchange};