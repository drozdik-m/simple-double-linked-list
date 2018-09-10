exports.__esModule = true;
//--------------------------------------------------
//----------LIST ITERATOR---------------------------
//--------------------------------------------------
var ListIterator = /** @class */ (function () {
    /**
     * Creates new instance of list iterator
     * @param front Front of the double linked list
     * @param back Back of the double linked list
     * @param size Size of the double linked list
     * @param current Reference on the current List Node. Default is set to front.
     */
    function ListIterator(front, back, size, current) {
        if (size === void 0) { size = -1; }
        if (current === void 0) { current = null; }
        this.front = null;
        this.back = null;
        this.current = null;
        this.size = -1;
        this.front = front;
        this.back = back;
        this.size = size;
        if (current == null)
            current = front;
        this.current = current;
    }
    /**
    * Moves to the next value
    */
    ListIterator.prototype.Next = function () {
        this.current = this.current.next;
    };
    /**
    * Moves to the previous value
    */
    ListIterator.prototype.Previous = function () {
        this.current = this.current.previous;
    };
    /**
    * Moves to the first value
    */
    ListIterator.prototype.ToFirst = function () {
        this.current = this.back;
    };
    /**
    * Moves to the last value
    */
    ListIterator.prototype.ToLast = function () {
        this.current = this.front;
    };
    /**
    * Returns current value
    * @returns Value of current element
    */
    ListIterator.prototype.Value = function () {
        if (this.current === null)
            return null;
        return this.current.value;
    };
    /**
    * Returns number of items in the iterator
    * @returns Number of items in the iterator
    */
    ListIterator.prototype.Size = function () {
        return this.size;
    };
    /**
    * Returns true if iterator is out ouf bounds (at the end)
    * @return True if iterator is out of bounds (at the end)
    */
    ListIterator.prototype.IsAtEnd = function () {
        return this.current === null;
    };
    /**
    * Returns currently selected node. Do not use unless you know what you are doing!
    * @returns Current node
    */
    ListIterator.prototype.GetCurrentNode = function () {
        return this.current;
    };
    return ListIterator;
}());
exports.ListIterator = ListIterator;
