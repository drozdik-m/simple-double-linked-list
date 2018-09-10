import { ListIterator } from "./listIterator";
export declare class List<T> {
    private size;
    private front;
    private back;
    constructor();
    /**
     * Adds an element to the front - O(1)
     * @param value Value to save
     */
    AddFront(value: T): void;
    /**
     * Adds an element to the back - O(1)
     * @param value Value to save
     */
    AddBack(value: T): void;
    /**
     * Finds and returns a node - O(n)
     * @param value Value to find
     */
    Find(value: T): ListIterator<T>;
    /**
     * Inserts a node after position selected by the iterator - O(1)
     * @param value Value to add
     * @param iterator Position iterator
     */
    InsertAfter(value: T, iterator: ListIterator<T>): void;
    /**
     * Inserts a node before position selected by iterator - O(1)
     * @param value Value to add
     * @param iterator Position iterator
     */
    InsertBefore(value: T, iterator: ListIterator<T>): void;
    /**
     * Removes a node - O(1)
     * @param iterator Target node
     */
    Remove(iterator: ListIterator<T>): void;
    /**
     * Changes nodes value
     * @param iterator Current node
     * @param value New value
     */
    Update(iterator: ListIterator<T>, value: T): void;
    /**
    * Checks is list is empty - O(1)
    * @returns True if list is empty
    */
    Empty(): boolean;
    /**
    * Removes all elements - O(1)
    */
    Clear(): void;
    /**
    * Returns number of elements in the list
    * @returns Number of elements in the list
    */
    Size(): number;
    /**
    * Returs iterator at first position - O(1)
    */
    Begin(): ListIterator<T>;
    /**
    * Returns iterator at last position - O(1)
    */
    End(): ListIterator<T>;
    /**
     * Adds first node - O(1)
     * @param value Value to add
     */
    private AddFirst(value);
    /**
    * Debug functions that prints whole list - O(n)
    */
    Print(): void;
}
