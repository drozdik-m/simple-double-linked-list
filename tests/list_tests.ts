declare module "assert-testing"{ };
import { Testing } from "assert-testing";
import { List } from "../src/list.js";

//Test function
export function TestList()
{
    let testing = new Testing("List");
    testing.StartTestingLog();
    
    //ADD FRONT TEST
    let list1 = new List<number>();
    for (let i = 0; i < 10; i++)
        list1.AddFront(i);
    let number = 0;
    for (let item = list1.Begin(); !item.IsAtEnd(); item.Next())
    {
        testing.Assert(item.Value() === number);
        number++;
    }
    testing.Assert(number === 10);
    number = 9;
    for (let item = list1.End(); !item.IsAtEnd(); item.Previous())
    {
        testing.Assert(item.Value() === number);
        number--;
    }
    testing.Assert(number === -1);

    //ADD BACK TEST
    let list2 = new List<number>();
    for (let i = 0; i < 10; i++)
        list2.AddBack(i);
    number = 9;
    for (let item = list2.Begin(); !item.IsAtEnd(); item.Next())
    {
        testing.Assert(item.Value() === number);
        number--;
    }
    testing.Assert(number === -1);
    number = 0;
    for (let item = list2.End(); !item.IsAtEnd(); item.Previous())
    {
        testing.Assert(item.Value() === number);
        number++;
    }
    testing.Assert(number === 10);

    //ITERATOR TEST
    let list3 = new List<number>();
    for (let i = 0; i < 20; i++)
        list3.AddFront(i);
    let listIterator1 = list3.Begin();
    testing.Assert(listIterator1.Size() === 20);
    listIterator1.Previous();
    testing.Assert(listIterator1.IsAtEnd());
    listIterator1.ToFirst();
    testing.Assert(listIterator1.Value() === 0);
    testing.Assert(!listIterator1.IsAtEnd());
    listIterator1.Previous();
    testing.Assert(listIterator1.IsAtEnd());
    listIterator1.ToLast();
    listIterator1.Previous();
    testing.Assert(listIterator1.Value() === 18);
    listIterator1.Next();
    testing.Assert(listIterator1.Value() === 19);
    listIterator1.Next();
    testing.Assert(listIterator1.Value() === null);
    testing.Assert(listIterator1.IsAtEnd());

    //FIND TEST
    let list4 = new List<number>();
    for (let i = 0; i < 10; i++)
        list4.AddFront(i);
    let listIterator2 = list4.Find(9);
    testing.Assert(listIterator2.Value() === 9);
    testing.Assert(!listIterator2.IsAtEnd());
    listIterator2.Next();
    testing.Assert(listIterator2.IsAtEnd());
    number = 0;
    for (let item = list4.Find(0); !item.IsAtEnd(); item.Next())
    {
        testing.Assert(!item.IsAtEnd());
        testing.Assert(item.Value() === number);
        number++;
    }
    testing.Assert(number === 10);

    //INSERT AFTER
    let list5 = new List<string>();
    for (let i = 0; i < 10; i++)
        list5.AddFront(i.toString());
    let listIterator3 = list5.Begin();
    listIterator3.ToLast();
    list5.InsertAfter("TEST!", listIterator3);
    testing.Assert(listIterator3.Value() === "9");
    listIterator3.Next();
    testing.Assert(listIterator3.Value() === "TEST!");
    listIterator3.Previous();
    testing.Assert(listIterator3.Value() === "9");
    listIterator3 = list5.Find("5");
    list5.InsertAfter("5+", listIterator3);
    testing.Assert(listIterator3.Value() === "5");
    listIterator3.Previous();
    testing.Assert(listIterator3.Value() === "4");
    listIterator3.Next();
    listIterator3.Next();
    testing.Assert(listIterator3.Value() === "5+");
    listIterator3.Next();
    testing.Assert(listIterator3.Value() === "6");
    listIterator3.ToFirst();
    list5.InsertAfter("0+", listIterator3);
    testing.Assert(listIterator3.Value() === "0");
    listIterator3.Next();
    testing.Assert(listIterator3.Value() === "0+");
    listIterator3.Previous();
    testing.Assert(listIterator3.Value() === "0");
    testing.Assert(list5.Begin().Value() == "0");
    testing.Assert(list5.End().Value() == "TEST!");
    
    //INSERT BEFORE
    let list6 = new List<string>();
    for (let i = 0; i < 10; i++)
        list6.AddFront(i.toString());
    let listIterator4 = list6.Begin();
    listIterator4.ToLast();
    list6.InsertBefore("9-", listIterator4);
    testing.Assert(listIterator4.Value() === "9");
    listIterator4.Previous();
    testing.Assert(listIterator4.Value() === "9-");
    listIterator4.Next();
    testing.Assert(listIterator4.Value() === "9");
    listIterator4.ToFirst();
    list6.InsertBefore("0-", listIterator4);
    testing.Assert(listIterator4.Value() === "0");
    listIterator4.Previous();
    testing.Assert(listIterator4.Value() === "0-");
    listIterator4.Next();
    testing.Assert(listIterator4.Value() === "0");
    testing.Assert(list6.Begin().Value() == "0-");
    testing.Assert(list6.End().Value() == "9");

    //EMPTY AND CLEAR
    let list7 = new List<boolean>();
    list7.AddFront(true);
    list7.AddFront(false);
    list7.AddFront(true);
    list7.AddFront(false);
    testing.Assert(list7.Size() === 4);
    testing.Assert(!list7.Empty());
    list7.Clear();
    testing.Assert(list7.Empty());
    testing.Assert(list7.Size() === 0);
    let listIterator5 = list7.Begin();
    testing.Assert(listIterator5.IsAtEnd());
    

    //REMOVE
    let list8 = new List<number>();
    for (let i = 0; i < 10; i++)
        list8.AddFront(i);
    for (let i = 0; i < 10; i++)
        list8.Remove(list8.Begin());
    testing.Assert(list8.Empty());
    for (let i = 0; i < 10; i++)
        list8.AddFront(i);
    list8.Remove(list8.Find(5));
    let listIterator6 = list8.Begin();
    number = 0;
    for (let i = 0; i < 10; i++)
    {
        if (i != 5)
        {
            testing.Assert(listIterator6.Value() == i);
            listIterator6.Next();
            number++;
        }
    }
    testing.Assert(number == 9);
    list8.Remove(list8.Begin());
    list8.Remove(list8.End());
    testing.Assert(list8.Begin().Value() == 1);
    testing.Assert(list8.End().Value() == 8);

    //UPDATE
    let list9 = new List<number>();
    list9.AddFront(1);
    list9.Update(list9.Begin(), 2);
    testing.Assert(list9.Begin().Value() === 2);

    testing.EndTestingLog();
}
TestList();