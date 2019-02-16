/**
 * 数组中的第K个最大元素
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 示例 2:
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 说明:
 * 
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //O(n*n)
    let rList = [];
    while(rList.length < k){
        let maxIndex = 0;
        for(let i=0,len=nums.length; i<len; i++){
            if(nums[i] > nums[maxIndex])maxIndex = i;
        }
        rList.push(nums[maxIndex]);
        nums[maxIndex] = -1;
    }
    console.log(rList)
    return rList[rList.length - 1]
    
};
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));