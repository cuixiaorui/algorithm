/**
 * 岛屿的个数
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 * 
 * 示例 1:
 * 
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * 输出: 1
 * 
 * 示例 2:
 * 
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * 输出: 3
 * @param {character[][]} grid
 * @return {number}
 */
let grid = [[1,1,1,1,0],
            [1,1,0,1,0],
            [1,1,0,0,0],
            [0,0,0,0,0]]

let grid1 = [[1,1,0,0,0],
             [1,1,0,0,0],
             [0,0,1,0,0],
             [0,0,0,1,1]]

let grid2 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

let grid3 = [["1","0","1","1","0","1","1"]]
var numIslands = function(grid) {
    if(!grid && grid.length === 0)return 0;
    if(!grid[0])return 0;
    //1. 遇到 1 就把它附近所有的1全部感染
    //2. 遇到几次1 就说明有几个岛屿

    var infection = function (gird,j,i,row,low){
        if(i < 0 || i >= row)return;
        if(j < 0 || j >= low)return;
        gird[j][i] = Number.parseInt(gird[j][i]);
        if(gird[j][i] === 0)return;
        gird[j][i] = 0;

        infection(gird,j,i + 1,row,low);
        infection(gird,j,i - 1,row,low);
        infection(gird,j + 1,i,row,low);
        infection(gird,j - 1,i,row,low);
    }

    const row = grid[0].length;
    const col = grid.length;
    let count = 0;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            const node = Number.parseInt(grid[j][i]);
            if(node === 1){
                //感染这个节点附近的所有节点
                count++;
                infection(grid,j,i,row,col);
            }
        }
    }
    return count;
};
numIslands(grid1);