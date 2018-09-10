
![Testing class - banner](images/heading-image.png?raw=true "Testing - easy and light assert")

# List

"List" is a **simple double linked list class**. This module is easy to use, light, small and has **no dependencies**, except assert-testing module for testing (not needed for usage).

Testing module is written in TypeScript and compiled into commonJS. 

**This is not any high-tech code. It is not dependent on 98761195187413.4 modules and does not offer unseen JavaScript magic. Download this, save an hour of your time and use it to create something awesome and efficient. We #keepItSimple.**

## Download

You can download the module on [GitHub/simple-double-linked-list](https://github.com/drozdik-m/simple-double-linked-list) or using [npm/simple-double-linked-list](https://www.npmjs.com/package/simple-double-linked-list) service.

```
npm install simple-double-linked-list --save
```

## Double linked list - What is that? (skip if you know)

Linked list is a **way to store unknown or large quantity of content**, just like an array. 

List has entirely different structure, then array though. Array is just a chunk of memory with initial point (position [0]). If you want for example 10th element, you know exactly, when to find it(array[10]). But, it is very inefficient when you want to insert or erase elements anywhere except the end. You must move the entire array by one position, which results in linear asymptotic complexity (inefficient). This is where double linked list excels.

Double linked list can insert or delete at any position with constant asymptotic complexity (very efficient). The problem is, that lists elements cannot be accessed randomly. The list must iterate all the elements to find or reach specific node, which results in inefficient linear asymptotic complexity. The is the lists weakness.

Summary: **List is very efficient at inserting and deleting elements at any position, but the elements cannot be accessed randomly, like with an array.** You would have to iterate all the elements and search for it (don't worry, the list class has search method implemented).

## Usage

### Import and create new list

You can import the module using __import__ keyword or __require__ function. In TypeScript, the List class is a generic class ("<>" thingies).

```javascript
import { List } from "simple-double-linked-list";

//Instantiate new and empty List
var list = new List();

//For TypeScript programmers: List in a generic class, so declaration in TypeScript would look like:
let list = new List<string>(); //<string> or whatever data type you want to store and work with

```

```javascript
var L = require("simple-double-linked-list")

//Instantiate new and empty List
var list = new L.List();

```

### List iterator

The list is may seem assembled very strangely for some programmers unfamiliar with a linked list. Browsing nodes and values can be confusing. That is why List come with class ListIterator, which handles browsing elements very easily. 

By calling simple methods, link .Next() or .Previous(), you can explore the List without any knowledge about List structure whatsoever.

Iterator examples:

```javascript

//Instantiate new and empty List
var list = new List();

//Add some random values
list1.AddFront(1);
list1.AddFront(5);
list1.AddFront(6851);
list1.AddFront(0);
list1.AddFront(666);

//Get iterator, pointing on the first element
var iterator = list1.Begin(); // == 1

//---1---5---6851---0---666---
//---^------------------------

//Move the iterator to the next position
list1.Next(); // == 5

//---1---5---6851---0---666---
//-------^--------------------

//Move the iterator to the end
list1.ToLast(); // == 666

//---1---5---6851---0---666---
//----------------------^^^---

//Extract the iterators value (current 666)
var evilNumber = list1.Value(); // == 666

//Check if the iterator is at the end -> The iterator is at the end when values are no longer valid or defined (example below)
list1.IsAtEnd(); // false

//Move the iterator to the next position
list1.Next(); // The 666 number was the last one, so the iterator is now at the end (points to null)

//---1---5---6851---0---666---
//--------out of range--------

//Check if iterator is at the end
list1.IsAtEnd(); // true

//We know, that iterator was at the end, so this will throw an error
var someNumber = list1.Value();

```

Loop all List elements using the iterator:

```javascript

//Instantiate new and empty List
var list = new List();

//Add 0-99 numbers
for (var i = 0; i < 100; i++)
	list.AddFront(i);

//Write 0-99 numbers into the console
for (var item = list.Begin(); !item.IsAtEnd(); item.Next())
	console.log(item.Value());

```

All iterator methods:

```javascript

iterator.Next(); //Moves to the next node
iterator.Previous(); //Moves to the previous node
iterator.ToFirst(); //Moves to the first node
iterator.ToLast(); //Moves to the last node
iterator.Value(); //Returns current value
iterator.Size(); //Returns number of nodes in the iterator
iterator.IsAtEnd(); //Returns boolean - True if the iterator is at the end (points to null) -> calling .Value() would result in an error

```

### List

Class List is constructed to work closely with its iterator. If you want to insert new values, delete old values or just update current values, you will have to use an iterator to indicate a position.

Working with list is easy. Here are all implemented methods:

```javascript

//Instantiate new and empty List
var list = new List();

list.AddFront("textFront"); //Adds value in the front

list.AddBack("textBack"); //Adds value in the back

list.Find("text"); //Finds a node with value "text" and returns ListIterator pointing to the found element
//If node was not found, the iterators .IsAtEnd() will returns true

list.InsertAfter("textToInsert", iterator); //Inserts new value "textToInsert" after value on by the iterator

list.InsertBefore("textToInsert", iterator); //Inserts new value with "textToInsert" before a value on by the iterator

list.Remove(iterator); //Removes a value pointed on by the iterator
//Possible usage may look like this:
list.Remove(list.Find("valueToDelete"));

list.Update(iterator, "newValue"); //Changes value selected by the iterator to "newValue"

list.Empty(); //Returns True if the list is empty (== no values inserted)

list.Clear(); //Removes all values in the list

list.Size(); //Returns number of values in the list

list.Begin(); //Returns an iterator pointing to the begin of the list (the first value)

list.End(); //Returns an iterator pointing to the end of the list (the last value)

list.Print(); //Prints lists content into the console

```

### More examples

There is a testing file included in this module ("simple-double-linked-list/tests/list_tests.ts" for TypeScript or "simple-double-linked-list/dist/tests/list_tests.js" for JavaScript). The test is "not small", so you may find more examples of the the List class there.

Sorry for my English, I hope it's readable.