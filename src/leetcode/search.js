/**
 * 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 
 * 示例 2:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 * 
 *  
 * 
 * 提示：
 * 
 *     你可以假设 nums 中的所有元素是不重复的。
 *     n 将在 [1, 10000]之间。
 *     nums 的每个元素都将在 [-9999, 9999]之间。
 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while(left <= right){
        mid = (left + right) >> 1;
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] < target){
            // 说明target 在数组的右侧
            left = mid+1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
};

var serach1 = function(nums,target){
    //递归版本
    const f = (left,right)=>{
        // 终止条件
        if(left > right)return -1;
        let mid = (left + right) >> 1;
        // 命中需要终止
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] < target){
            // 说明target 在数组的右侧
            left = mid+1;
        }else{
            right = mid - 1;
        }
        return f(left,right)
    }
    return f(0,nums.length - 1);
}
// console.log(serach1([-1,0,3,5,9,12],9));
console.log(serach1([-1,0,3,5,9,12],2));
// console.log(search([-1,0,3,5,9,12],2));