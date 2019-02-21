/**
 * 假设我们有一个 n 乘以 n 的矩阵 w[n][n]。
 * 矩阵存储的都是正整数。棋子起始位置在左上角，终止位置在右下角。
 * 我们将棋子从左上角移动到右下角。
 * 每次只能向右或者向下移动一位。
 * 从左上角到右下角，会有很多不同的路径可以走。
 * 我们把每条路径经过的数字加起来看作路径的长度。
 * 那从左上角移动到右下角的最短路径长度是多少呢？
 */
    //[[1,3,5,9],
    // [2,1,3,4]
    // [5,2,6,7],
    // [6,8,4,3]]
var rect = [[1, 3, 5, 9],
            [2, 1, 3, 4],
            [5, 2, 6, 7],
            [6, 8, 4, 3]]


function optPath(rect,i,j){
    //公式： opt(i,j) = rect[i,j] + min(opt(i - 1,j),opt(i,j - 1));
    //终止： i == 0 && j == 0    -> 到达终点
    //      i < 0 || j < 0      -> 超出边界的没有意义 无需计算 
   
    if(i < 0 || j < 0)return 0;
    if(i === 0 && j === 0)return rect[i][j];

    const upV = optPath(rect,i,j - 1);
    const leftV = optPath(rect,i - 1, j);
    return rect[i][j] +  Math.min(upV,leftV); 
}
console.log(optPath(rect,3,3));

function optPath1(rect,n){
    //动态规划实现法
    //状态转移表法
    let sum = 0;
    let matrix = [];
    for(let i=0; i<n; i++){
        if(!matrix[0]){
            matrix[0] = [];
        }
        matrix[0][i] = rect[0][i] + sum;
        sum = matrix[0][i]

    }
    sum = 0;
    for(let j=0; j<n; j++){
        if(!matrix[j]){
            matrix[j] = [];
        }
        matrix[j][0] = rect[j][0] + sum;
        sum = matrix[j][0]
    }

    for(let i=1; i<n; i++){
        for(let j=1; j< n; j++){
            let a =matrix[i - 1][j] 
            let b =matrix[i][j - 1] 
            let c = Math.min(a,b);
            matrix[i][j] = c + rect[i][j]
            
        }
    }
    return matrix[n -1][n - 1]
}
console.log(optPath1(rect,4))
