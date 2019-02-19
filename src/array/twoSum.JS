/**
 * 两数之和 II - 输入有序数组
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 
 *     返回的下标值（index1 和 index2）不是从零开始的。
 *     你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} 
 **/
var twoSum = function(numbers, target) {
    //利用 hash O(1) 查询
    let hash = {};
    for(let i=0,len=numbers.length; i < len; i++){
        let s =target - numbers[i] 
        if(hash[s] !== undefined)
        {
            return [hash[s]+1,i+1]
        }
        //后添加，保证 index1 小于 index2
        hash[numbers[i]] = i;
    }
};
var twoSum1 = function(numbers,target){
    //使用对撞指针法
    let i = 0;
    let j = numbers.length - 1;
    while(i < j){
        if(numbers[i] + numbers[j] < target){
            i++;
        }else if(numbers[i] + numbers[j] > target){
            j--;
        }else{
            return [i+1,j+1]
        }
    } 
}
// console.log(twoSum([2, 7, 11, 15],9));
console.log(twoSum1([2, 7, 11, 15],9));