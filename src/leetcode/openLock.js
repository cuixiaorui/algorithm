/**
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * 
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 
 * 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
 * 
 *  
 * 
 * 示例 1:
 * 
 * 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * 输出：6
 * 解释：
 * 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
 * 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
 * 因为当拨动到 "0102" 时这个锁就会被锁定。
 * 
 * 示例 2:
 * 
 * 输入: deadends = ["8888"], target = "0009"
 * 输出：1
 * 解释：
 * 把最后一位反向旋转一次即可 "0000" -> "0009"。
 * 
 * 示例 3:
 * 
 * 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
 * 输出：-1
 * 解释：
 * 无法旋转到目标数字且不被锁定。
 * 
 * 示例 4:
 * 
 * 输入: deadends = ["0000"], target = "8888"
 * 输出：-1
 * 
 *  
 * 
 * 提示：
 * 
 *     死亡列表 deadends 的长度范围为 [1, 500]。
 *     目标数字 target 不会在 deadends 之中。
 *     每个 deadends 和 target 中的字符串的数字会在 10,000 个可能的情况 '0000' 到 '9999' 中产生。
 * 
 * @param {string[]} deadends
 * @param {string} target
 * @return {number} 
 *  */
const Queue = require('../dataStructure/Queue');
var deadends = ["0201", "0101", "0102", "1212", "2002"]
var target = "0202"
var openLock = function (deadends, target) {
    //bfs 搜索,检测一个最短距离
    //除了死亡列表内的元素和访问过的元素 别的元素都需要放到队列内，搜索检测
    var visited = Object.create(null);
    //把死亡列表转换为hash，查找更快
    var deadHash = Object.create(null);
    deadends.forEach((element,index) => {
        deadHash[element] = true;
    });
    var start = "0000";
    var queue = new Queue();
    queue.enqueue(start);
    visited[start] = true;

    const getNeighbor = function (node) {
        // 0000 - 9999 
        let strList = node.split("");
        let neighbor = new Set();
        for (let i = 0, len = strList.length; i < len; i++) {
            //8个邻居
            let tempList = strList.slice();
            const upS = (+strList[i]) === 0 ? 0 : strList[i] - 1;
            tempList[i] = upS + "";
            neighbor.add(tempList.join(""));

            tempList = strList.slice();
            const downS = (+tempList[i] + 1) % 10;
            tempList[i] = downS + "";
            neighbor.add(tempList.join(""));
        }
        return Array.from(neighbor);
    }

    let step = 0;
    while (!queue.isEmpty()) {
        let size = queue.size();
        //广度优先遍历， 每次添加的元素算作一轮   a -> b,c,d,e  遍历完 b c d e 后 这才叫做一轮
        for (let i = 0; i < size; i++) {

            let node = queue.dequeue();
            if (node === target) {
                return step;
            }
            //获取周围的节点
            let neighborList = getNeighbor(node);
            for (let i = 0, len = neighborList.length; i < len; i++) {
                let neighborNode = neighborList[i];

                if (!deadHash[neighborNode] && !visited[neighborNode]) {
                    visited[neighborNode] = true;
                    queue.enqueue(neighborNode);
                }
            }
        }
        step++;
    }
    return step;
};
openLock(deadends, target);
