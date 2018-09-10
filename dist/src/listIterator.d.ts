import { ListNode } from "./listNode";
export declare class ListIterator<T> {
    private front;
    private back;
    private current;
    private size;
    /**
     * Creates new instance of list iterator
     * @param front Front of the double linked list
     * @param back Back of the double linked list
     * @param size Size of the double linked list
     * @param current Reference on the current List Node. Default is set to front.
     */
    constructor(front: ListNode<T>, back: ListNode<T>, size?: number, current?: ListNode<T>);
    /**
    * Moves to the next value
    */
    Next(): void;
    /**
    * Moves to the previous value
    */
    Previous(): void;
    /**
    * Moves to the first value
    */
    ToFirst(): void;
    /**
    * Moves to the last value
    */
    ToLast(): void;
    /**
    * Returns current value
    * @returns Value of current element
    */
    Value(): T;
    /**
    * Returns number of items in the iterator
    * @returns Number of items in the iterator
    */
    Size(): number;
    /**
    * Returns true if iterator is out ouf bounds (at the end)
    * @return True if iterator is out of bounds (at the end)
    */
    IsAtEnd(): boolean;
    /**
    * Returns currently selected node. Do not use unless you know what you are doing!
    * @returns Current node
    */
    GetCurrentNode(): ListNode<T>;
}
