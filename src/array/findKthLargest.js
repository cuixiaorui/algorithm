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
var findKthLargest1 = function(nums,k){
    //使用快排算法处理  O(nlogn)
    quickSork(nums)
    return nums[k - 1];

}
var quickSork = function(list){
    //递归公式： quickSork(s……e) = quickSork(s……q-1) + quickSork(q+1 …… e)
    //终止条件： s >= e
    const quickSork_c = (list,s,e)=>{
        if(s >= e)return;
        //获取分区点
        let q = partition(list,s,e);
        quickSork_c(list,s,q - 1);
        quickSork_c(list,q+1,e)
    }
    quickSork_c(list,0,list.length-1);
}

    const partition = (list,s,e)=>{
        //取最后一个值，作为中心点
        let pivot = list[e]
        //给当前的数组排序，大于中心点的放在左边,小于中心点的放到右边(大到小排列)
        let j = s;
        for(let i=s; i<=e; i++){
            if(list[i] <= pivot)
            {
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
                j++;
            }
        }
        
        return j - 1;

    }