/**/

export default class ToDoList /* Defines a main Java Script class for a ro-do and makes it the primary export of that file:

export default -> tells JS to export this class as a default value from the module for easy import into other files

class ToDoList -> creates the object ToDoList

constructor() ->  A special method that runs automatically when you create a new instance of the ToDoList class using the new keyword.

this._list = []; -> Creates a private-convention property on the object (_list) and sets it to an empty array [] to hold future tasks or items

this -> the this keyword refers to the object currently executing the piece of code.
*/{
    constructor() {
        this._list = [];
    }

    getList() {
        return this._list;
    }

    clearList() {
        this._list = [];
    }

    addItemToList(itemObj) {
        this._list.push(ItemObj);
    }

    /* functionname(arguement) { } */

    removeItemFromList(itemObj) {
        const list = this._list;
        for (let i = 0; i < list.length; i++) {
            if (list[i]-_id == id) {
                list.splice(i, 1);
                break;
            }
        }
    }

    /* 
       1. Accesses the list: It looks at a list stored inside the object (this._list).
        2. Loops through items: It uses a for loop to check every single item in that list, one by one, starting from the first item (index 0).
        3. Checks for a match: It compares the ID of the current item in the loop against the ID you passed into the function.
        4. Removes the item: If it finds a match, it uses .splice(i, 1) to cut that 1 item out of the list.
        5. Stops early: The break statement immediately stops the loop because the job is already done, saving computer memory. 
    */
}