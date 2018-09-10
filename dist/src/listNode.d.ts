export declare class ListNode<T> {
    next: ListNode<T>;
    previous: ListNode<T>;
    value: T;
    /**
     * Creates new instance of list node
     * @param value Value of the node
     * @param next Reference to the next node
     * @param previous Reference to the previous node
     */
    constructor(value: T, next?: ListNode<T>, previous?: ListNode<T>);
}
