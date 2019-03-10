/**
 * 搜索二维矩阵 II
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * 
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * 示例:
 * 
 * 现有矩阵 matrix 如下：
 * 
 * [
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 *[1,4,7,11,15,2,5,8,12,19,3,6,9,16,22,10,13,14,17,24,18,21,23,26,30] 
 * 给定 target = 5，返回 true。
 * 
 * 给定 target = 20，返回 false。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //先确定小得范围
    //如果target得值   大于 matrix[i][0]   小于 matrix[i][matrix[i].length] 说明其值有可能在这个范围内，
    //因为当前范围内得值都是有序得，可使用二分查找搜索
    //优化点：可以把for循环改为二分查找确定行
    for(let i=0,len = matrix.length; i<len;i++){
        let list = matrix[i];
        let listLen = list.length -1;

        if(target === list[0] || target === list[listLen])return true;
        if(target > list[0] && target  < list[listLen]){
            //使用二分查找
            let l = 0;
            let r = listLen;
            while(l <= r){
                let m = (r+l) >> 1;
                if (list[m] === target) {
                    return true;
                } else if (list[m] < target) {
                    //说明在右侧
                    l = m + 1;
                } else {
                    //说明在左侧
                    r = m - 1;
                }
            }
        }
    }
    return false;
};


 let m =  [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
console.log(searchMatrix(m,20));



var searchMatrix1 = function(matrix, target) {
    //更快得解法
    // 1. 所锁定行
    let len = matrix.length;
    let i = 0;
    let j = matrix[0].length - 1;
    
    
    while(i < len && j >= 0){
        if(matrix[i][j] === target)return true;
        else{
            if(matrix[i][j] > target){
                j--;
            }else{
                i++;
            }
        }
    }
    return false;
}

// console.log(searchMatrix1(m,20));
let mm = [[-5]]
searchMatrix1(mm,-5)



//TODO 解法三：  把二维数组转化成一维数组 然后进行二分查找
