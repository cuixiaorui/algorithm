/*
 * 字符串解码
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 示例:
 * 
 * s = "3[a]2[bc]", 返回 "aaabcbc".
 * s = "3[a2[c]]", 返回 "accaccacc".
 * s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
 * 
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // 非 ] 都入栈
    // ] 时候出栈，直到遇到 [ （这部分内容为乘子）
    // 继续出栈 （倍数）
    // 乘子 * 倍数  然后入栈
    
    let stack = [];
    for(let i=0,len = s.length; i<len; i++){
        if(s[i] === "]"){
            let m = ''
            while(stack[stack.length - 1]!== '['){
                m = stack.pop() + m;
            }
            // 弹出 [
            stack.pop();
            // 弹出数字
            // 数字有可能是多位数
            let num = ""
            while(stack[stack.length -1] &&  /\d/.test(stack[stack.length -1])){
                num = stack.pop() + num;
            }
            stack.push(m.repeat(+num));
        }else{
            stack.push(s[i])
        }
    }
    return stack.reduce((r,s)=>{
        r = r + s;
        return r;
    },"")
};
// decodeString("3[a]2[bc]");
decodeString("3[a2[c]]");
// decodeString("2[abc]3[cd]ef");
decodeString("10[leet]");