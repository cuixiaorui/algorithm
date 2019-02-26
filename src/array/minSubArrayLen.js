/**
 * 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 * 
 * 示例: 
 * 
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 * 
 * 进阶:
 * 
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 * @param {number} s
 * @param {number[]} nums
 * @return {number} 
 */
var minSubArrayLen = function (s, nums) {
    //当前这个算法比较暴力，需要优化
    //优化点：利用之前记录的结果，不要在重新计算（todo）
    if (nums.length === 0) return 0;
    let minValue = 0;

    //i 是滑动窗口的左侧
    let i = 0;
    //i 是滑动串钩的右侧
    let j = 0;
    let tempSum = 0;
    while (i < nums.length) {
        if (tempSum < s && j < nums.length) {
            tempSum += nums[j];
            j++;
        } else {
            if (tempSum >= s) {
                let k = j - i;
                if (k < minValue || !minValue) minValue = k;
            }
            i++;
            j = i;
            tempSum = 0;
        }
    }
    return minValue;
};
// console.log(minSubArrayLen(7,[2,3,1,2,4,3]))
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))
/**
 * 利用之前算过的值，不在重新计算
 * @param {*} s 
 * @param {*} nums 
 */
var minSubArrayLen1 = function(s,nums){
    if(nums.length === 0)return 0;
    let value = 0;

    let l = 0;
    let r = 0;
    let sum = 0;
    while(l < nums.length){
        if(sum < s && r < nums.length){
            sum += nums[r]
            r++;
        }else{
            if(sum >= s){
                sum -= nums[l]
                let k = r - l;
                if(value > k || !value) value = k;
            }
            l++;
        }
    }
    return value;
}
console.log(minSubArrayLen1(7,[2,3,1,2,4,3]))