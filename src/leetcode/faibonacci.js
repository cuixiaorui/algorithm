/**
 * 斐波那契算法的实现
 *  
 */
function faibonacci(n) {
    //递归公式： fai(n) = fai(n - 1) + fai(n - 2)
    //递归基线： n == 1 || n == 2
    if (n === 1 || n === 2) return 1;
    return faibonacci(n - 1) + faibonacci(n - 2);
}
/**
 * 基于动态规划的思想去优化
 * 存储每一个步骤的值，然后推导出之后的值 
 * @param {*} n 
 */
function faibonacci1(n) {
    let hash = {};
    const calcu = (n) => {
        if (n === 1 || n === 2) return 1;
        let a = hash[n - 1] || calcu(n - 1);
        let b = hash[n - 2] || calcu(n - 2);
        return a + b;
    }
    for (let i = 1; i <= n; i++) {
        hash[i] = calcu(i)
    }
    return hash[n]
}
console.log(faibonacci1(5));