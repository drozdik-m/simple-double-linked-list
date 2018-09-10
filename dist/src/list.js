exports.__esModule = true;
var listNode_1 = require("./listNode");
var listIterator_1 = require("./listIterator");
//--------------------------------------------------
//----------LIST------------------------------------
//--------------------------------------------------
var List = /** @class */ (function () {
    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    function List() {
        //--------------------------------------------------
        //----------VARIABLES-------------------------------
        //--------------------------------------------------
        this.size = 0;
        this.front = null;
        this.back = null;
    }
    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------
    /**
     * Adds an element to the front - O(1)
     * @param value Value to save
     */
    List.prototype.AddFront = function (value) {
        //If there is 0 elements
        if (this.size === 0) {
            this.AddFirst(value);
            return;
        }
        //Create new element
        var newNode = new listNode_1.ListNode(value, null, this.front);
        //Redirect front element
        this.front.next = newNode;
        //Change front to the new node
        this.front = newNode;
        //Increase size
        this.size += 1;
    };
    /**
     * Adds an element to the back - O(1)
     * @param value Value to save
     */
    List.prototype.AddBack = function (value) {
        //If there is 0 elements
        if (this.size === 0) {
            this.AddFirst(value);
            return;
        }
        //Create new element
        var newNode = new listNode_1.ListNode(value, this.back, null);
        //Redirect back element
        this.back.previous = newNode;
        //Change back to the new node
        this.back = newNode;
        //Increase size
        this.size += 1;
    };
    /**
     * Finds and returns a node - O(n)
     * @param value Value to find
     */
    List.prototype.Find = function (value) {
        for (var item = this.back; item != null; item = item.next) {
            //Found the item
            if (item.value === value)
                return new listIterator_1.ListIterator(this.front, this.back, this.size, item);
        }
        return null;
    };
    /**
     * Inserts a node after position selected by the iterator - O(1)
     * @param value Value to add
     * @param iterator Position iterator
     */
    List.prototype.InsertAfter = function (value, iterator) {
        var addAfterNode = iterator.GetCurrentNode();
        if (addAfterNode == null) {
            console.error("List.AddAfter(..., ...) - iterator is at the end");
            return;
        }
        //New nodes next
        var newNodesNext = null;
        if (addAfterNode.next != null) {
            newNodesNext = addAfterNode.next;
        }
        //New nodes previous
        var newNodesPrevious = addAfterNode;
        //New node
        var newNode = new listNode_1.ListNode(value, newNodesNext, newNodesPrevious);
        //Redirect pointers to the new node
        addAfterNode.next = newNode;
        if (newNodesNext != null)
            newNodesNext.previous = newNode;
        //Change "back" if new node is the last one
        if (newNode.next == null)
            this.front = newNode;
    };
    /**
     * Inserts a node before position selected by iterator - O(1)
     * @param value Value to add
     * @param iterator Position iterator
     */
    List.prototype.InsertBefore = function (value, iterator) {
        var addBeforeNode = iterator.GetCurrentNode();
        if (addBeforeNode == null) {
            console.error("List.InsertBefore(..., ...) - iterator is at the end");
            return;
        }
        //New nodes next
        var newNodesNext = addBeforeNode;
        //New nodes previous
        var newNodesPrevious = null;
        if (addBeforeNode.previous != null) {
            newNodesPrevious = addBeforeNode.previous;
        }
        //New node
        var newNode = new listNode_1.ListNode(value, newNodesNext, newNodesPrevious);
        //Redirect pointers to the new node
        addBeforeNode.previous = newNode;
        if (newNodesPrevious != null)
            newNodesPrevious.next = newNode;
        //Change "back" if new node is the last one
        if (newNode.previous == null)
            this.back = newNode;
    };
    /**
     * Removes a node - O(1)
     * @param iterator Target node
     */
    List.prototype.Remove = function (iterator) {
        var elementToRemove = iterator.GetCurrentNode();
        if (elementToRemove == null) {
            console.error("List.Remove(...) - iterator is at the end");
            return;
        }
        //Corrent back and front
        if (this.back == elementToRemove)
            this.back = elementToRemove.next;
        if (this.front == elementToRemove)
            this.front = elementToRemove.previous;
        //Redirect previous element
        if (elementToRemove.previous != null)
            elementToRemove.previous.next = elementToRemove.next;
        //Redirect next element
        if (elementToRemove.next != null)
            elementToRemove.next.previous = elementToRemove.previous;
        this.size -= 1;
    };
    /**
     * Changes nodes value
     * @param iterator Current node
     * @param value New value
     */
    List.prototype.Update = function (iterator, value) {
        iterator.GetCurrentNode().value = value;
    };
    /**
    * Checks is list is empty - O(1)
    * @returns True if list is empty
    */
    List.prototype.Empty = function () {
        return this.size === 0;
    };
    /**
    * Removes all elements - O(1)
    */
    List.prototype.Clear = function () {
        this.front = null;
        this.back = null;
        this.size = 0;
    };
    /**
    * Returns number of elements in the list
    * @returns Number of elements in the list
    */
    List.prototype.Size = function () {
        return this.size;
    };
    /**
    * Returs iterator at first position - O(1)
    */
    List.prototype.Begin = function () {
        return new listIterator_1.ListIterator(this.front, this.back, this.size, this.back);
    };
    /**
    * Returns iterator at last position - O(1)
    */
    List.prototype.End = function () {
        return new listIterator_1.ListIterator(this.front, this.back, this.size, this.front);
    };
    /**
     * Adds first node - O(1)
     * @param value Value to add
     */
    List.prototype.AddFirst = function (value) {
        //Create new node
        var newNode = new listNode_1.ListNode(value);
        //Add it
        this.front = newNode;
        this.back = newNode;
        this.size++;
    };
    /**
    * Debug functions that prints whole list - O(n)
    */
    List.prototype.Print = function () {
        if (this.size === 0) {
            console.log("---List empty---");
            return;
        }
        console.log("------------------");
        var id = 0;
        for (var item = this.Begin(); !item.IsAtEnd(); item.Next()) {
            console.log("[" + id + "] " + item.Value());
            id++;
        }
        console.log("------------------");
    };
    return List;
}());
exports.List = List;
