package singlylinkedlist

import "fmt"

type Node struct {
	value int
	next  *Node
}

type SinglyLinkedList struct {
	head *Node
	tail *Node
}

func (sll *SinglyLinkedList) add(data int) {
	newNode := &Node{value: data, next: nil}
	if sll.head == nil {
		sll.head = newNode
		sll.tail = newNode
	} else {
		sll.tail.next = newNode
		sll.tail = newNode
	}
}

func (sll *SinglyLinkedList) printValues() {
	current := sll.head
	for current != nil {
		fmt.Print(current.value)
		fmt.Printf(" -> ")
		current = current.next
	}
}
