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

func (sll *SinglyLinkedList) insert(data int) {
	newNode := &Node{value: data, next: nil}
	if sll.head == nil {
		sll.head = newNode
		sll.tail = newNode
	} else {
		sll.tail.next = newNode
		sll.tail = newNode
	}
}

func (sll *SinglyLinkedList) delete(data int) {
	previousNode := sll.head
	searchNode := sll.head

	for searchNode != nil {
		if searchNode.value == data {
			previousNode.next = searchNode.next
		}
		previousNode = searchNode
		searchNode = searchNode.next
	}
}

func (sll *SinglyLinkedList) print() {
	current := sll.head
	for current != nil {
		fmt.Print(current.value)
		if current.next != nil {
			fmt.Printf(" -> ")
		}
		current = current.next
	}
}
