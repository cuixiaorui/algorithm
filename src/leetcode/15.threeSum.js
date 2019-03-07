/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // a + b + c = 0  -->  a + b = -c
    // 3个数相加 转化为 2个数相加问题
    //1. 排序,排序后可以基于指针的左右移动，减小复杂度
    const result = [];
    nums.sort( (a,b)=>{return a - b})
    for (let i = 0, len = nums.length - 2; i < len; i++) {
        // nums[i] <= nums[i - 1] 意味这现在得值不能等于之前的值，因为之前的值已经处理过了（不然会造成重复）
        if(i !==0 && nums[i] <= nums[i - 1])continue;
        const c = nums[i] * -1;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] > c) {
                k--;
            } else if (nums[j] + nums[k] < c) {
                j++;
            } else {
                const arr = [nums[i], nums[j], nums[k]];
                result.push(arr)
                //重复的值用掉后就需要指向一个新的值
                k--;
                j++;
                while( j < k && nums[j] === nums[j - 1]){
                    j++;
                    i = j
                }

                while( k > j && nums[k] === nums[k + 1]){
                    k--;
                }
            }
        }
    }
    return result;
};

// threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([0,0,0,0])
// threeSum([-2,0,1,1,2])
threeSum([-1,0,1,2,-1,-4])