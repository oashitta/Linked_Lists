const LinkedList = require('./linkedList')
const linkedList = require('./linkedList')

// add to head
describe('#prepend', ()=> {
  test('it adds the element to the beginning for the list', ()=> {
    const ll = new linkedList()
    ll.prepend(10)
    const oldHead = ll.head
    ll.prepend(20)

    expect(ll.head.value).toBe(20)
    expect(ll.head.next).toBe(oldHead)
    expect(ll.length).toBe(2)
  })
})

// add to tail
describe('#append', () => {
  test('it adds the element to the end for the list', ()=> {
    const ll = new linkedList.fromValues(10, 20, 30, 40)
    ll.append(50)

    expect(ll.tail.value).toBe(50)
    expect(ll.length).toBe(5)
  })
})


describe('#getByIndex', () => {
  describe('with index < 0', () => {
    test('it returns null', () => {
      const ll = linkedList.fromValues(10, 20)

      expect(ll.getByIndex(-1)).toBeNull()
    })
  })

  describe('with index > list length', () => {
    test('it returns null', () => {
      const ll = linkedList.fromValues(10, 20)

      expect(ll.getByIndex(4)).toBeNull()
    })
  })

  describe('with index 0', () => {
    test('it should return the head', () => {
      const ll = linkedList.fromValues(10, 20)

      expect(ll.getByIndex(0).value).toBe(10)
    })
  })

  describe('with index in the middle', () => {
    test('should return element at that index', () => {
      const ll = linkedList.fromValues(10, 20, 30, 40, 50, 60, 70)

      expect(ll.getByIndex(3).value).toBe(40)
    })
  })
})

describe('#insertAtIndex', () => {
  describe('with index < 0', () => {
    test('it does not insert anything', () => {
      const ll = linkedList.fromValues(10, 20)
      ll.insertAtIndex(-1, 40)

      expect(ll.length).toBe(2)
    })
  })

  describe('with index > list length', () => {
    test('it does not insert anything', () => {
      const ll = linkedList.fromValues(10, 20)
      ll.insertAtIndex(5, 40)

      expect(ll.length).toBe(2)
    })
  })

  describe('with index 0', () => {
    test('it inserts at head', () => {
      const ll = linkedList.fromValues(10, 20)
      ll.insertAtIndex(0, 40)

      expect(ll.head.value).toBe(40)
      expect(ll.head.next.value).toBe(10)
      expect(ll.length).toBe(3)
    })

  })

  describe('with index in the middle', () => {
    test('it inserts at specified index', () => {
      const ll = linkedList.fromValues(10, 20, 30, 40)
      ll.insertAtIndex(2, 50)
      const node = ll.getByIndex(2)

      expect(node.value).toBe(50)
      expect(node.next.value).toBe(30)
      expect(ll.length).toBe(5)

    })
  })
})


describe('#removeHead', () => {
  test('remove the head', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.removeHead()

    expect(ll.head.value).toBe(20)
    expect(ll.length).toBe(2)
  })
})

describe('#removeAtIndex', () => {
  describe('with index < 0', () => {
    test('it does not remove anything', () => {
      const ll = linkedList.fromValues(10, 20)
      ll.removeAtIndex(-1)
  
      expect(ll.length).toBe(2)
    })
  })

  describe('with index > list length', () => {
    test('it does not remove anything', () => {
      const ll = linkedList.fromValues(10, 20)
      ll.removeAtIndex(5)

      expect(ll.length).toBe(2)
    })
  })

  describe('with index 0', () => {
    test('it removes at head', () => {
      const ll = linkedList.fromValues(10, 20, 30)
      ll.removeHead(0)
  
      expect(ll.head.value).toBe(20)
      expect(ll.head.next.value).toBe(30)
      expect(ll.length).toBe(2)
    })
  })

  describe('with index in the middle', () => {
    test('it removes at specified index', () => {
      const ll = linkedList.fromValues(10, 20, 30, 40)
      ll.removeAtIndex(2)
      const node = ll.getByIndex(1)

      expect(node.value).toBe(20)
      expect(node.next.value).toBe(40)
      expect(ll.length).toBe(3)

    })
  })
 
})


// removes last element from list
// describe('#pop', () => {
//   test('remove the tail', () => {
//     const ll = LinkedList.fromValues(10, 20, 30, 40)
//     ll.removeTail()

//     expect(ll.tail).toBe(30)
//     expect(ll.length).toBe(3)
//   })
// })