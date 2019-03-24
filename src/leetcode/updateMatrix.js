/**
 * 01 矩阵
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 
 * 两个相邻元素间的距离为 1 。
 * 
 * 示例 1: 
 * 输入:
 * 
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 输出:
 * 
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 示例 2: 
 * 输入:
 * 
 * 0 0 0
 * 0 1 0
 * 1 1 1
 * 输出:
 * 
 * 0 0 0
 * 0 1 0
 * 1 2 1
 * 注意:
 * 
 * 给定矩阵的元素个数不超过 10000。
 * 给定矩阵中至少有一个元素是 0。
 * 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    // BFS解题
    // 待优化， leetcode 超时

    let row = matrix.length;
    let col = matrix[0].length;
    const getPoints = ({x,y})=>{
        
        const points = [];
        if(x - 1 >= 0){
            points.push({x:x-1,y});
        }
    
        if(x + 1 < row){
            points.push({x:x+1,y})
        }

        if( y - 1 >= 0){
            points.push({x,y: y - 1});
        }

        if( y + 1 < col){
            points.push({x,y: y + 1});
        }

        return points;
    }

    const hasZero = function(list){
       return list.some(({x,y})=>{
           return matrix[x][y] === 0;
       }) 
    }
    

    const initVisited = function(){
        let visited = []
        for(let i=0; i<row; i++){
            let arr = [];
            for(let j=0; j<col; j++){
                arr.push(0);
            }
            visited.push(arr);
        }
        return visited;
    }

    let queue = [];
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            const point = matrix[i][j];
            if(point === 0){
                continue;
            }
            queue = [];
            queue.push([{x:i,y:j}]);
            let count = 1;
            const visited = initVisited();
            while(queue.length !== 0){
                let pList = queue.shift();
                let nextList = [];
                for(let k=0,len = pList.length; k<len; k++){
                    const p = pList[k];
                    if(visited[p.x][p.y] !== 1){
                        visited[p.x][p.y] = 1;
                        const nearbyPoints = getPoints(p)
                        nextList.push(...nearbyPoints);
                    }
                }
                if(hasZero(nextList)){
                    matrix[i][j] = count;
                }else{
                    count++;
                    if (nextList.length > 0) {
                        queue.push(nextList);
                    }
                }
            }
        }
    }
    console.log(matrix)
    return matrix;
};
// updateMatrix([[0,0,0],[0,1,0],[1,1,1]]);
// updateMatrix([[0,0,0],[0,1,0],[0,0,0]]);
updateMatrix([[1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
              [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
              [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
              [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
              [0, 1, 0, 1, 1, 0, 0, 0, 0, 1], 
              [0, 0, 1, 0, 1, 1, 1, 0, 1, 0], 
              [0, 1, 0, 1, 0, 1, 0, 0, 1, 1], 
              [1, 0, 0, 0, 1, 1, 1, 1, 0, 1], 
              [1, 1, 1, 1, 1, 1, 1, 0, 1, 0], 
              [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
            ]);