// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。


var jumpFloor = function(n){
    // 递归公式： jumpFloor(n) = jumpFloor(n - 1) + jumpFloor(n - 2);
    // 终止条件:  n === 1 || n === 2

    if(n === 1 || n === 2)return n;

    return jumpFloor(n - 1) + jumpFloor(n - 2);
}


var jumpFloor1 = function(n){
    // dp 动态规划解题

    // 已知 1 个台阶的时候，只有一种跳法。 2 个台阶的时候 有两种跳法
    // 3 个台阶的时候有  jumpFloor(1) + jumpFloor(2) 种跳法
    
    let hash = {
        1: 1,
        2: 2
    }


    for(let i=3; i<=n; i++){
        hash[i] = hash[i - 1] + hash[i - 2];
    }

    return hash[n]
}


console.log(jumpFloor1(10));