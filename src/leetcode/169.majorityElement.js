/**
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * @param {number[]} nums
 * 
 * @return {number}
 */
var majorityElement = function(nums) {
    //hash 实现法
    let hash = Object.create(null);
    for(let num of nums){
        if(hash[num] === undefined)
        {
            hash[num] = 0;
        }
        hash[num] += 1; 
    }
    
    let max;
    let majority;
    for(let key in hash){

        if(!max || max < hash[key]){
            max = hash[key];
            majority = +key
        }
    }
    return majority
    

};
// majorityElement([3,2,3])
majorityElement(
    [2, 2, 1, 1, 1, 2, 2]
)

