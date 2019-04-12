
var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]

/**
 * 实现原理是 当参数积累到和 fn 的参数一样的时候，回调 fn 
 * @param {*} fn 
 * @param {*} args 
 */
function curry(fn,args){
        
    let length = fn.length;
    args = args || [];
    return function(){
        let _args = [...args,...arguments]

        if(_args.length < length){
            return curry.call(this,fn,_args)
        }else{
            // 因为 _args 是数组
            // 所以使用 apply 展开数组
            return fn.apply(this,_args)
        }
    } 

}