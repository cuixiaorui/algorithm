module.exports = class DoublyLink {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    /**
     * 获取链表中第 index 个节点的值。如果索引无效，则返回-1。
     * @param {*} index 
     */
    get(index) {
        if(index >= this.length){
            return -1;
        }
        let node = this.head;
        for (var i = 1; i <= index; i++) {
            node = node.next;
        }
        return node.value;
    }

    /**
     * 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
     * @param {*} val 
     */
    addAtHead(val) {
        let newNode = new DoublyLinkNode(val);
        if (this.head) {
            newNode.next = this.head.next;
            newNode.next.prev = newNode
        }
        this.head = newNode;
        this.length++;
    }

    /**
     * 将值为 val 的节点追加到链表的最后一个元素。
     * @param {*} val 
     */
    addAtTail(val) {
        //1. 先找到最后一个元素
        if (!this.head) {
            this.head = new DoublyLinkNode(val);
        } else {
            var tailNode = this.head;
            while (tailNode.next) {
                tailNode = tailNode.next;
            }

            tailNode.next = new DoublyLinkNode(val);
            tailNode.next.prev = tailNode;

        }
        this.length++;

    }

    /**
     * 在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。
     * @param {*} index 
     * @param {*} val 
     */
    addAtIndex(index, val) {
        if (index > this.length) {
            return;
        }
        if (index === this.length) {
            this.addAtTail(val);
        } else if (index === 0) {
            this.addAtHead(val);
        } else {
            //1. 先找到index所在的node
            let node = this.head;
            for (var i = 1; i <= index; i++) {
                node = node.next;

            }
            let newNode = new DoublyLinkNode(val);

            node.prev.next = newNode;
            newNode.prev = node.prev;

            newNode.next = node;
            node.prev = newNode;
            this.length++;
        }
    }

    /**
     * 如果索引 index 有效，则删除链表中的第 index 个节点。
     * @param {*} index 
     */
    deleteAtIndex(index) {
        if (index < this.length) {
            //1. 先找到index所在的node
            let node = this.head;
            if (index === 0) {
                if (this.head.next) {
                    this.head = this.head.next
                } else {
                    this.head = null;
                }
            } else {
                for (var i = 1; i <= index; i++) {
                    node = node.next;
                }

                if (node.prev) {
                    node.prev = node.next;
                }

                if (node.next) {
                    node.next.prev = node.prev;
                }
            }

        }
    }
}

class DoublyLinkNode {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}