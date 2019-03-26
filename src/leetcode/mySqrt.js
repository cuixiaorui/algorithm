/**
 * x 的平方根
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 *      由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 区间【1 ... x】
    if(x === 0)return 0;

    let left = 1;
    let right = x;
    while(left <= right){
        // l + (r - l) >> 1 是为了防止 l + r 溢出
        let mid = left +((right - left) >> 1 );
        // 终止条件
        // 1. mid * mid === x
        // 2. x 在  mid * mid  和 （mid + 1） * （mid + 1） 的范围内
        if(mid * mid === x || (x > (mid * mid) && x < (mid + 1) * (mid + 1))){
            return mid;
        }else if(mid * mid > x){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
};

var mySqrt1 = function(x){
    if(x === 0)return 0;

    // 简单for循环版实现
    for(let i=1; i<=x; i++){
        if(i * i > x){
            return i - 1;
        }else if(i * i === x){
            return i;
        }
    }
    return 0;
}

[2147483647
].forEach( (i)=>console.log(mySqrt(i)))
// const r = mySqrt(4)
// const r = mySqrt(8)
// const r = mySqrt(9)
// const r = mySqrt(1024)
// console.log(r);