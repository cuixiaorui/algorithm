/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 * 
 * 示例:
 * 
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 进阶：
 * 
 *     一个直观的解决方案是使用计数排序的两趟扫描算法。
 *     首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 *     你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * 
 *  
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    //先使用插入排序来解决(插入排序属于原地排序)
    //插入排序 O(n^2)
    for (let i = 1, len = nums.length; i < len; i++) {
        //当前的值
        let cur = nums[i]
        //i - 1 代表这已经排好序的位置
        let j = i - 1;
        for (; j >= 0; j--) {
            //如果当前值小于排好序的值 那么交换位置
            //交换位置的技巧 -》 右移：上一个的值 = 当前的值
            if (cur < nums[j]) {
                nums[j+1] = nums[j]
            }else{
                break;
            }
        }
        //最后赋值即可
        nums[j+1] = cur;
    }
    return nums;
};

/**
 * 另外一种思路
 * 因为题目表明只有 3 种颜色 即 [0,1,2]
 * 遍历数组的时候 只需要把 0 放置表头， 2 放置表尾， 1 无须处理 
 * @param {*} nums 
 */
var sortColors1 = function(nums){
    //2个指针  对应这开始位置，和结束位置
    let low = 0;
    let high = nums.length - 1;
    let curIndex = 0;
    
    while(curIndex <= high){
        if(nums[curIndex] === 0){
            let temp = nums[curIndex];
            nums[curIndex] = nums[low]
            nums[low] = temp;
            low++;
            curIndex++;
        }else if(nums[curIndex] === 2){
            let temp = nums[curIndex];
            nums[curIndex] = nums[high]
            nums[high] = temp;
            high--;
            //解释为什么这里不需要 curIndex++
            //因为 high-- 了，总长度减了1，那么 curIndex 就不需要++了 不然就多移动了一位
        }else{
            curIndex++;
        }
    }
    return nums;
}
sortColors1([1, 2, 0]);