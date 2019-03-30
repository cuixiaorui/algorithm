/**
 * 寻找峰值
 * 峰值元素是指其值大于左右相邻值的元素。
 * 
 * 给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。
 * 
 * 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
 * 
 * 你可以假设 nums[-1] = nums[n] = -∞。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1]
 * 输出: 2
 * 解释: 3 是峰值元素，你的函数应该返回其索引 2。
 * 示例 2:
 * 
 * 输入: nums = [1,2,1,3,5,6,4]
 * 输出: 1 或 5 
 * 解释: 你的函数可以返回索引 1，其峰值元素为 2；
 *      或者返回索引 5， 其峰值元素为 6。
 * 说明:
 * 
你的解法应该是 O(logN) 时间复杂度的。
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // 峰值 = 当前节点 > 左侧节点 && 当前节点 > 右侧节点
    // 如果 当前节点 < 右侧节点  -》 说明 峰值在右侧 left = mid + 1;
    // 如果 当前节点 > 右侧节点  -》 说明 峰值在左侧 right = mid - 1;

    if(!nums)return -1;
    if(nums.length === 0)return -1;
    if(nums.length === 1)return 0;

    let l = 0;
    let r = nums.length -1;

    // 因为如果 mid 等于 r 的时候  
    // 下面判断 mid + 1 的话 就无法进入了，造成了死循环
    // 所以 l 的值不能大于 r
    while(l < r){
        let mid = l + ((r - l) >> 1);

        if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]){
            return mid;
        }else if(nums[mid] < nums[mid + 1]){
            l = mid + 1;
        }else if(nums[mid] > nums[mid + 1]){
            r = mid - 1;
        }
    }
    return l;
    
};

// const r = findPeakElement( [1,2,3,1])
// const r = findPeakElement( [2,1])
const r = findPeakElement( [1,2])
// const r = findPeakElement([1,2,1,3,5,6,4])
console.log(r);
