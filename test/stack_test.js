var assert = require('assert');
var Stack = require('../src/dataStructure/Stack');
describe('Stack', function() {
  describe('#push()', function() {
    it('入栈后一个元素后，Stack 的长度应该为一', function() {
        var stack = new Stack();
        stack.push(1);
        assert(stack.getLength() === 1); 
    });

    

  });

  describe("#pop()",function(){
    it("出栈一个元素后， Stack 的长度应该为零",function(){
      var stack = new Stack();
      stack.push(1);
      stack.pop();
      assert(stack.getLength() === 0); 
    })

    it("出栈元素等于之前添加的",function(){
      var stack = new Stack();
      var value = 1;
      stack.push(value);
      var popValue = stack.pop();
      assert(popValue === value );
    })

    it("当为空栈时，返回undefined",function(){
      var stack = new Stack();
      var popValue = stack.pop();
      assert(popValue === undefined );
    })

    it("进栈 A ，出栈，进栈B，出栈，返回B",()=>{
      var stack = new Stack();
      stack.push("A");
      stack.pop();
      stack.push("B");
      var result = stack.pop();
      assert(result === "B");
    })
  })


  describe("#peek()",function(){
    it("栈顶为1时，返回1",function(){
      var stack = new Stack();

      stack.push(1);
      assert(stack.peek() === 1);
    })

    it("栈为空时，返回undefined",function(){
      var stack = new Stack();
      assert(stack.peek() === undefined);
    })
  })

  describe("#empty()",function(){
    it("栈的长度为0时，返回true",()=>{
      var stack = new Stack();
      var length = stack.getLength();
      if(length === 0){
        assert(stack.empty() === true)
      }
    })
  })
});