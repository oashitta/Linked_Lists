class LinkedList {
  constructor() {
    // first element in list
    this.head = null
    this.length = 0 
  }

  // returns last element
  tail() {
    let current = this.head;
    while (current.next != null) current = current.next;
    return current;
  }

  // returns first element
  getHead() {
    return this.head;
  }

  // adds a new node and the start of list
  prepend(value) {
    // data is the value of the new list being created. thi.head is value of next, which means that the existing head becomes the next element when a new head is created. 
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
   
    this.length++
  }
  // adds a new node and the start of list
  append(value) {
    const newNode = new LinkedListNode(value, null)

    if (this.head == null) this.prepend(value)
   
    while (this.head.next != null) {
      this.head = this.head.next
    }
    this.tail = newNode
    this.length++
    return newNode;
  }


  getByIndex(index) {
    if (index < 0 || index >= this.length) return null

    let current = this.head
    for (let i = 0; i < index; i++){
      current = current.next
    }
    return current
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.prepend(value)

    // value before the index we want to insert at.
    const prev  = this.getByIndex(index - 1)
    if (prev == null) return null

    // set the value of the next reference in the prev node to the new value and value of the next referenc in the new value(index) to prev.next(i.e. prev surrent next value).
    prev.next = new LinkedListNode(value, prev.next)
    this.length++
  }

  removeHead() {
    this.head = this.head.next
    this.length--
  }

  removeAtIndex(index, value) {
    if (index === 0) return this.removeHead()

    const prev  = this.getByIndex(index - 1)
    if (prev == null) return null

    prev.next = prev.next.next
    this.length--
  }

 

  // remove tail
  // pop() {
  //   this.tail = this.head.prev
  //   this.length--
  // }

  // helper function to print linkedlist
  printToString() {
    let output = ""
    let current = this.head

    while(current) {
      output = `${output}${current.value} -> `
      current = current.next
    }
    console.log(`${output}null`)
  }

}

class LinkedListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

// a helper function that allows the creation of a linked list from an array of values. to provide info for testing.
LinkedList.fromValues = function(...values) {
  const ll = new LinkedList()
  // starting from the end of the array because we are appending elements to the begining of the list
  for (let i = values.length -1; i >= 0; i --) {
    ll.prepend(values[i])
  }
  return ll
}

module.exports = LinkedList