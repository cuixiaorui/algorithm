/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1:
 * 
 * 给定数组 nums = [1,1,2], 
 * 
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0)return;
    var j = 0;
    for(var i=0,len=nums.length; i<len; i++){
        //检测到下一个值不等于当前值的时候， 就把当前值放到 j 的位置。
        if(nums[i] !== nums[i+1]){
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
    
};
// console.log(removeDuplicates([1,1,2]))
/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1:
 * 
 * 给定 nums = [1,1,1,2,2,3],
 * 
 * 函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,0,1,1,1,1,2,3,3],
 * 
 * 函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
    if(!nums || nums.length === 0 || nums.length === 1)return;
    var j = 0;
    for(var i=0,len = nums.length; i<len; i++){
        //只要当前值不等于 nums[j - 2]就需要移动j的位置
        // nums[j] 和 nums[j - 1] 等于 nums[i] 是无所谓的，还是满足条件(每个元素最多出现两次)
        if(nums[i] !== nums[j - 2])
        {
            nums[j] = nums[i];
            j++
        }
    }
    return j;
};
console.log(removeDuplicates2([0,1,2,2,2,2,2,3,4,4,4]))