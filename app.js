
// file for testing the linked list
const LinkedList = require('./linkedList')

const ll = new LinkedList()

ll.prepend(10)
ll.prepend(20)
// console.log(ll)

const ll2 = new LinkedList.fromValues(10, 20, 30, 40)
// ll2.print()
// console.log(ll2.getByIndex(0)) 
// console.log(ll2.getByIndex(0).value) 
// console.log(ll2.getByIndex(0).next) 

ll2.print()
ll2.removeAtIndex(2)
// ll2.removeHead()
// ll2.insertAtIndex(2, 90)
// ll2.insertAtIndex(-1, 90) // cannot insert at the tail this way
ll2.print()