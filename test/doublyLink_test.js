var assert = require('assert');
var DoublyLink = require('../src/dataStructure/DoublyLink.js');
describe('DoublyLink', function() {
  describe('#addAtHead()', function() {
    it('插入1，头节点的value应该为1', function() {
        var link = new DoublyLink();
        link.addAtHead(1);
        assert(link.head.value === 1); 
    });
    
  });


  describe('#addAtTail()', function() {
    it('插入2，尾节点的value应该为2', function() {
        var link = new DoublyLink();
        link.addAtTail(2);

        var tailNode = link.head;
        while(tailNode.next){
            tailNode = tailNode.next;
        }
        assert(tailNode.value === 2); 
    });

    it('添加完头节点，在添加尾节点',()=>{
        var link = new DoublyLink();
        link.addAtHead(1);
        link.addAtTail(2);
        assert(link.length === 2);
        assert(link.head.value === 1);
        assert(link.head.next.value === 2);
        assert(link.head.next.prev.value === 1);

    })
    
  });

  describe('#addAtIndex()', function() {
    it('index等于链表的长度时，则该节点将附加到链表的末尾', function() {
        var link = new DoublyLink();
        link.addAtHead(1);
        link.addAtIndex(1,2);
        var firstNode = link.head;
        var secondNode = link.head.next;
        assert(firstNode.value === 1);
        assert(secondNode.value === 2);
        assert(secondNode.prev.value === 1);

    });

    it('如果 index 大于链表长度，则不会插入节点', function() {
        var link = new DoublyLink();
        link.addAtIndex(0,1);
        link.addAtIndex(2,3);
        assert(link.head.value === 1);
    });

    it('在链表中的第 index 个节点之前添加值为 val  的节点', function() {
        var link = new DoublyLink();
        link.addAtIndex(0,1);
        link.addAtIndex(1,3);
        link.addAtIndex(1,2)

        assert(link.head.value === 1);
        assert(link.head.next.value === 2);
        assert(link.head.next.next.value === 3);
        assert(link.head.next.next.prev.value === 2);
        assert(link.head.next.prev.value == 1);
    });
    
  });

  describe("#deleteAtIndex()",()=>{
      it("索引 index 无效，什么也不做",()=>{
        var link = new DoublyLink();
        link.addAtIndex(0,1);
        link.addAtIndex(1,2);

        link.deleteAtIndex(2);
        assert(link.head.next.value === 2);
      })

      it(`有效的话，删除对应的索引的节点`,()=>{
        var link = new DoublyLink();
        link.addAtIndex(0,1);
        link.addAtIndex(1,2);

        link.deleteAtIndex(0);
        assert(link.head.value === 2);

      })
  })

  describe("#get()",()=>{
      it(`如果index合法`,()=>{
        var link = new DoublyLink();
        link.addAtIndex(0,1);
  
        assert(link.get(0) === 1);
      })

      it(`如果index 非法`,()=>{
          var link = new DoublyLink();
          assert(link.get(0) === -1);
      })
     
  })
});