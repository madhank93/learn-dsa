package singlylinkedlist

import (
	"reflect"
	"testing"
)

func TestSinglyListInsert(t *testing.T) {

	t.Run("Insert", func(t *testing.T) {
		sl := SinglyLinkedList{}
		sl.add(5)
		sl.add(10)
		sl.add(15)

		got := []int{}
		want := []int{5, 10, 15}
		current := sl.head
		got = append(got, current.value)

		for current.next != nil {
			current = current.next
			got = append(got, current.value)
		}

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got: %v, want: %v", got, want)
		}
	})

}
