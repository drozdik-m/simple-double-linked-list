import { ListNode } from "./listNode";

//--------------------------------------------------
//----------LIST ITERATOR---------------------------
//--------------------------------------------------
export class ListIterator<T>
{
    private front: ListNode<T> = null;
    private back: ListNode<T> = null;
    private current: ListNode<T> = null;
    private size: number = -1;

    /**
     * Creates new instance of list iterator
     * @param front Front of the double linked list
     * @param back Back of the double linked list
     * @param size Size of the double linked list
     * @param current Reference on the current List Node. Default is set to front. 
     */
    constructor(front: ListNode<T>, back: ListNode<T>, size: number = -1, current: ListNode<T> = null)
    {
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
    Next()
    {
        this.current = this.current.next;
    }

    /**
    * Moves to the previous value
    */
    Previous()
    {
        this.current = this.current.previous;
    }

    /**
    * Moves to the first value
    */
    ToFirst()
    {
        this.current = this.back;
    }

    /**
    * Moves to the last value
    */
    ToLast()
    {
        this.current = this.front;
    }

    /**
    * Returns current value
    * @returns Value of current element
    */
    Value(): T
    {
        if (this.current === null)
            return null;
        return this.current.value;
    }

    /**
    * Returns number of items in the iterator
    * @returns Number of items in the iterator
    */
    Size(): number
    {
        return this.size;
    }

    /**
    * Returns true if iterator is out ouf bounds (at the end)
    * @return True if iterator is out of bounds (at the end)
    */
    IsAtEnd(): boolean
    {
        return this.current === null;
    }

    /**
    * Returns currently selected node. Do not use unless you know what you are doing!
    * @returns Current node
    */
    GetCurrentNode(): ListNode<T>
    {
        return this.current;
    }
}