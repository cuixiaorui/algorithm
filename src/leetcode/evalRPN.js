/**
 * 逆波兰表达式求值
 * 根据逆波兰表示法，求表达式的值。
 * 
 * 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 
 * 说明：
 * 
 *     整数除法只保留整数部分。
 *     给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 
 * 示例 1：
 * 
 * 输入: ["2", "1", "+", "3", "*"]
 * 输出: 9
 * 解释: ((2 + 1) * 3) = 9
 * 
 * 示例 2：
 * 
 * 输入: ["4", "13", "5", "/", "+"]
 * 输出: 6
 * 解释: (4 + (13 / 5)) = 6
 * 
 * 示例 3：
 * 
 * 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * 输出: 22
 * 解释: 
 *   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 * 
 * 
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
    const stack = [];

    const add = function (a,b){
        return a + b;
    }
    const subtract = function (a,b){
        return a - b;
    }

    const multiply = function (a,b){
        return a * b
    }

    const divide = function (a,b){
        return a / b
    }

    let map = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide
    } 

    for(let i=0, len = tokens.length; i<len; i++){
        let token = tokens[i]
        if(map[token]){
            // 如果是符号的话，那么取栈顶 2 个元素进行计算
            // 计算结果需要入栈
            let v1 = +stack.pop();
            let v2 = +stack.pop();

            let r = map[token].call(null,v2,v1) 
            stack.push(Number.parseInt(r));
        }else{
            stack.push(token)
        }
    }
    return stack.pop();
    
};

// evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
evalRPN(["4","-2","/","2","-3","-","-"])