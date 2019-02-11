/**
 * @param {number[]} nums
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 *     必须在原数组上操作，不能拷贝额外的数组。
 *     尽量减少操作次数。
 * 
 * 
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //1.最简单的办法，遇到 0 的话就一直往后移动（从后往前遍历，遇到零结束移动）  
    //时间复杂度 O(n^2)
    if(!nums)return;
    if(nums.length === 0 || nums.length === 1)return;
    if(!Array.isArray(nums))return;

    // var len = nums.length;
    // for(var i=len - 1; i>=0; i--){
    //     if(!nums[i]){
    //         var j = i;
    //         while(j < len && nums[j+1])
    //         {
    //             nums[j] = nums[j + 1];
    //             j++;
    //         }
    //         nums[j] = 0;
    //     }
    // }
    //2. 把数组分成2个部分，j 记录位置，<j 为非0的数，>j 为0的数，利用2个值的交换
    //O(n)
    var j = 0;
    for(var i=0, len= nums.length;i<len;i++){
        if(nums[i]){
            if (i !== j) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp
            }
            j++;
        }
    }
    return nums;
};
//test
console.time('time')
console.log(moveZeroes([0,1,0,3,12]));
console.timeEnd('time')