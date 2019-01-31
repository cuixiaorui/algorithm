/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (38.72%)
 * Total Accepted:    1M
 * Total Submissions: 2.7M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //遍历筛选  target - nums[n] = f (需要查找的值) 
    //如果 f 在 nums 内的话，返回其 n 和 f 的索引值
    //利用 哈希查找为 O(1) 的特性
    //最终的时间复杂度为  O(n) 
    const hash = {};
    const len = nums.length;
    for(let i=0; i<len; i++){
        const f = target - nums[i]
        //可以利用1个循环就搞定，后添加f 也无妨
        if(hash[f] || hash[f] === 0 ){
            return [i,hash[f]]
        }
        hash[nums[i]] = i
    }
    return -1;
};