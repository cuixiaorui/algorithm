/**
 * 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //去除空格
    //全部转换为 小写
    //只判断 数字和字母
    s = s.trim().toLocaleLowerCase();
    let i = 0;
    let j = s.length - 1;

    const pattern = /\w/;
    //对撞指针 -> 利用2个指针，头指针和尾指针，然后向中间靠拢   
    while (i < j) {
        if (!pattern.test(s[i])) {
            i++;
        }
        else if (!pattern.test(s[j])) {
            j--;
        } else {
            if (s[i] === s[j]) {
                i++;
                j--;
            } else {
               return false; 
            }
        }

    }
    return true;

};

console.log(isPalindrome("race a car"));