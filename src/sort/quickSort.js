/**
 * 快速排序
 * 复杂度：O（log n * n）
 * 思想：分而治之 利用 D&C 思想
 * 
 * 分析：
 * 组成递归的条件：
 * 基准条件：数组的长度小于2 （小于2的时候 没有交换的必要）
 * 循环条件： 
 * 1.例如数组为[4,1,8]
 * 取一个分水值
 * 例如取 数组的第一个值  4.
 * 然后 把其余的 数据  分开   大于 4的 在右边  小于 4的 在左边；例如：
 * 1 比 4小  放左边：1 [4],  8比 4 大 放右边： 4 [8];
 * 联合起来 就是  1 4 8
 * 
 * 利用递归 来把一个大的数组 拆分成小的 分别按照以上步骤处理 这就是D&C 思想
 * 拆分步骤：
 * 分解：[6,2,5,34,7,3,58,9]
 * 1.  取6：    2 5 3 【6】7 9 34 58
 * 2.  [2 5 3]   取2：【2】 5 3
 * 3.  [5,3]     取5： 3 【5】  
 * 4.  数组长度小于 2 结束
 * 
 * 5.  [7 9 34 58] 取7：【7】9 34 58
 * 6.  [9 34 58] 取9:【9】34 58
 * 7.  [34 58]  取34 【34】58
 * 8.  数组长度小于 2结束
 * 
 */

 //一不小心写了一个去重排序
 function quickSort1(list){
    if(list.length < 2)return list;
    let q = list[0];
    let leftList = list.filter( v => v < q);
    let rightList = list.filter( v=> v > q);
    return [...quickSort1(leftList),q,...quickSort1(rightList)];
 }

  //快速排序
  function quickSort(list){
    if(list.length < 2)return list;
    let q = list.shift();
    let leftList = list.filter( v => v <= q);
    let rightList = list.filter( v=> v > q);
    return [...quickSort(leftList),q,...quickSort(rightList)];
 }
