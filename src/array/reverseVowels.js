/**
 * 反转字符串中的元音字母
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 说明:
 * 元音字母不包含字母"y"。
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    let i = 0;
    let j = s.length - 1;
    //有可能是 大小写字母 所有加 i 忽略大小写
    let pattern = /[aeiou]/i
    //字符串不能直接赋值，所以需要先转成数组进行操作
    let arrStr = s.split(''); 
    while( i < j){
        if(!pattern.test(arrStr[i])){
            i++;
        }else if(!pattern.test(arrStr[j])){
            j--;
        }else{
            let temp = arrStr[i]
            arrStr[i] = arrStr[j];
            arrStr[j] = temp;
            i++
            j--
        }

    }
    return arrStr.join('');
};
console.log(reverseVowels("leetcode"))