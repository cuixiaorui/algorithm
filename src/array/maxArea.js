/**
 * maxArea
 * leetcode 11题
 * 盛最多水的容器
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 *  
 * 
 * 示例:
 * 
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //着道题就是求范围，x轴为 长  ， y轴为 高
    //1. 使用2个指针， 不断的缩小（哪边的y轴的值小，就缩哪边）。
    //记录一个最大值
    let i = 0;
    let j = height.length - 1;
    let width = height.length - 1;
    let mA = 0;
    while( i < j){
        //求出最小值， 因为容器的高是以最小的值来定义的
        //哪边的高度小就缩哪边 -> 力求遇到高度很大的值
        let h;
        if(height[i] < height[j]){
            h = height[i];
            i++;
        }else{
            h = height[j];
            j--;
        }

        //计算完当前的范围
        const area = h * width;
        //只记录最大值
        if(area > mA) mA = area;

        //每次缩完后，宽也要随之变化
        width--;

    }
   return mA; 
};
console.log(maxArea([1,2,4,3]))