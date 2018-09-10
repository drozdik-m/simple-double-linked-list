import { ListNode } from "./listNode";
import { ListIterator } from "./listIterator";


//--------------------------------------------------
//----------LIST------------------------------------
//--------------------------------------------------
export class List <T>
{
    //--------------------------------------------------
    //----------VARIABLES-------------------------------
    //--------------------------------------------------
    private size: number = 0;
    private front: ListNode<T> = null;
    private back: ListNode<T> = null;


    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    constructor()
    {
        
    }

    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------
    /**
     * Adds an element to the front - O(1)
     * @param value Value to save
     */
    AddFront(value: T)
    {
        //If there is 0 elements
        if (this.size === 0)
        {
            this.AddFirst(value);
            return;
        }

        //Create new element
        let newNode = new ListNode<T>(value, null, this.front);

        //Redirect front element
        this.front.next = newNode;

        //Change front to the new node
        this.front = newNode;

        //Increase size
        this.size += 1;
    }

    /**
     * Adds an element to the back - O(1)
     * @param value Value to save
     */
    AddBack(value: T)
    {
        //If there is 0 elements
        if (this.size === 0)
        {
            this.AddFirst(value);
            return;
        }

        //Create new element
        let newNode = new ListNode<T>(value, this.back, null);

        //Redirect back element
        this.back.previous = newNode;

        //Change back to the new node
        this.back = newNode;

        //Increase size
        this.size += 1;
    }

    /**
     * Finds and returns a node - O(n)
     * @param value Value to find
     */
    Find(value: T): ListIterator<T>
    {
        for (let item = this.back; item != null; item = item.next)
        {
            //Found the item
            if (item.value === value)
                return new ListIterator<T>(this.front, this.back, this.size, item);
        }
        return null;
    }

    /**
     * Inserts a node after position selected by the iterator - O(1)
     * @param value Value to add
     * @param iterator Position iterator
     */
    InsertAfter(value: T, iterator: ListIterator<T>)
    {
        let addAfterNode = iterator.GetCurrentNode();
        if (addAfterNode == null)
        {
            console.error("List.AddAfter(..., ...) - iterator is at the end");
            return;
        }

        //New nodes next
        let newNodesNext = null;
        if (addAfterNode.next != null)
        {
            newNodesNext = addAfterNode.next;
        }

        //New nodes previous
        let newNodesPrevious = addAfterNode;
        
        //New node
        let newNode = new ListNode(value, newNodesNext, newNodesPrevious);

        //Redirect pointers to the new node
        addAfterNode.next = newNode;
        if (newNodesNext != null)
            newNodesNext.previous = newNode;

        //Change "back" if new node is the last one
        if (newNode.next == null)
            this.front = newNode;
    }

    /**
     * Inserts a node before position selected by iterator - O(1)
     * @param value Value to add
     * @param iterator Position iterator
     */
    InsertBefore(value: T, iterator: ListIterator<T>)
    {
        let addBeforeNode = iterator.GetCurrentNode();
        if (addBeforeNode == null)
        {
            console.error("List.InsertBefore(..., ...) - iterator is at the end");
            return;
        }

        //New nodes next
        let newNodesNext = addBeforeNode;

        //New nodes previous
        let newNodesPrevious = null;
        if (addBeforeNode.previous != null)
        {
            newNodesPrevious = addBeforeNode.previous;
        }

        //New node
        let newNode = new ListNode(value, newNodesNext, newNodesPrevious);

        //Redirect pointers to the new node
        addBeforeNode.previous = newNode;
        if (newNodesPrevious != null)
            newNodesPrevious.next = newNode;

        //Change "back" if new node is the last one
        if (newNode.previous == null)
            this.back = newNode;
    }

    /**
     * Removes a node - O(1)
     * @param iterator Target node
     */
    Remove(iterator: ListIterator<T>)
    {
        let elementToRemove = iterator.GetCurrentNode();
        if (elementToRemove == null)
        {
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
    }

    /**
     * Changes nodes value
     * @param iterator Current node
     * @param value New value
     */
    Update(iterator: ListIterator<T>, value: T)
    {
        iterator.GetCurrentNode().value = value;
    }

    /**
    * Checks is list is empty - O(1)
    * @returns True if list is empty
    */
    Empty(): boolean
    {
        return this.size === 0;
    }

    /**
    * Removes all elements - O(1)
    */
    Clear()
    {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    /**
    * Returns number of elements in the list
    * @returns Number of elements in the list
    */
    Size(): number
    {
        return this.size;
    }

    /**
    * Returs iterator at first position - O(1)
    */
    Begin(): ListIterator<T>
    {
        return new ListIterator<T>(this.front, this.back, this.size, this.back);
    }

    /**
    * Returns iterator at last position - O(1)
    */
    End(): ListIterator<T>
    {
        return new ListIterator<T>(this.front, this.back, this.size, this.front);
    }

    /**
     * Adds first node - O(1)
     * @param value Value to add
     */
    private AddFirst(value: T) {
        //Create new node
        let newNode = new ListNode<T>(value);

        //Add it
        this.front = newNode;
        this.back = newNode;
        this.size++;
    }

    /**
    * Debug functions that prints whole list - O(n)
    */
    Print()
    {
        if (this.size === 0)
        {
            console.log("---List empty---");
            return;
        }
        console.log("------------------");
        let id = 0;
        for (let item = this.Begin(); !item.IsAtEnd(); item.Next())
        {
            console.log(`[${id}] ` + item.Value());
            id++;
        }
        console.log("------------------");
    }
}




