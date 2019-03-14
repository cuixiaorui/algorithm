/**
 * 每日温度
 * 根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高的天数。如果之后都不会升高，请输入 0 来代替。
 * 
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * 
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的都是 [30, 100] 范围内的整数。
 * 
 * @param {number[]} T
 * @return {number[]}
 */
const Stack = require("../dataStructure/Stack");
var dailyTemperatures = function (T) {
    // 使用一个 while 解决
    // 但是逻辑较复杂
    if (T === 1) return 0;

    let s1 = new Stack();
    let s2 = new Stack();
    let r = [];


    let startIndex;
    let i = 0;
    while(i < T.length){
        let val = T[i]
        if (s1.empty()) {
            s1.push(val)
            r.push(0)
            startIndex = i;
            i++;
        } else {
            if (val > s1.peek()) {
                const len = s2.getLength() + 1;
                s2.clear();
                s1.clear();
                r[r.length -1] = len;
                i = startIndex + 1;
            } else if(i < T.length - 1){
                s2.push(val)
                i++;
            }else{
                i = startIndex + 1
                s2.clear();
                s1.clear();
            }
        }

    }
    return r;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])