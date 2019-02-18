/**
 * 合并两个有序数组
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead. * 
 * 这个操作相当于归并算法的 partition 的过程
 *  */
var merge = function (nums1, m, nums2, n) {
    //时间复杂度 O(m + n);
    //空间复杂度 O(m + n);
    let newNums1 = [];
    for (let i = 0; i < m; i++) {
        newNums1[i] = nums1[i]
    }
    let newNums2 = [];
    for (let i = 0; i < n; i++) {
        newNums2[i] = nums2[i]
    }


    let i = 0;
    let j = 0;
    let k = 0;
    while (newNums1[i] !== undefined && newNums2[j] !== undefined) {
        if (newNums1[i] < newNums2[j]) {
            nums1[k] = newNums1[i]
            i++;
        }
        if (newNums1[i] >= newNums2[j]) {
            nums1[k] = newNums2[j];
            j++;
        }
        k++;
    }

    if (i < newNums1.length) {
        for (; i < newNums1.length; i++) {
            nums1[k] = newNums1[i]
            k++;
        }
    }

    if (j < newNums2.length) {
        for (; j < newNums2.length; j++) {
            nums1[k] = newNums2[j]
            k++;
        }
    }
};
// merge([1,2,3,0,0,0],3,[2,5,6],3)
// merge([4,5,6,0,0,0],3,[1,2,3],3)
/**
 *  
 * todo 官方推荐 尾插入法 
 * 利用 nums1 额外的内存空间， 把 nums1 和 nums2 比对大小 把大的插入到 nums1 的尾部
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */
var merge1 = function (nums1, m, nums2, n) {
    //时间复杂度 O(m+n)
    //空间复杂度，这里利用了  nums1 的空间,没有额外增加新的内存空间
    let i = m - 1;
    let j = n - 1;
    let k = nums1.length - 1;
    while (nums1[i] !== undefined && nums2[j] !== undefined) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j]
            j--;
        }
        k--;
    }

    for (; i >= 0; i--) {
        nums1[k] = nums1[i]
        k--;
    }

    for (; j >= 0; j--) {
        nums1[k] = nums2[j]
        k--;
    }
    return nums1;
}

merge1([1,2,3,0,0,0],3,[2,5,6],3)
// merge1([0], 0, [1], 1);