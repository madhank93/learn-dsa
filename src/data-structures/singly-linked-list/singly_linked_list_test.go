package singlylinkedlist

import (
	"fmt"
	"reflect"
	"strings"
	"testing"
)

func TestSinglyListInsert(t *testing.T) {

	t.Run("Insert", func(t *testing.T) {
		sl := SinglyLinkedList{}
		sl.insert(5)
		sl.insert(10)
		sl.insert(15)

		got := []int{}
		want := []int{5, 10, 15}
		current := sl.head

		for current != nil {
			got = append(got, current.value)
			current = current.next
		}

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got: %v, want: %v", got, want)
		}
	})

	t.Run("Remove", func(t *testing.T) {
		sl := SinglyLinkedList{}
		sl.insert(5)
		sl.insert(10)
		sl.insert(15)
		sl.insert(20)
		sl.delete(10)

		got := []int{}
		want := []int{5, 15, 20}
		current := sl.head

		for current != nil {
			got = append(got, current.value)
			current = current.next
		}

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got: %v, want: %v", got, want)
		}
	})

	t.Run("Print", func(t *testing.T) {
		sl := SinglyLinkedList{}
		sl.insert(5)
		sl.insert(10)
		sl.insert(15)
		sl.insert(20)
		sl.print()

		var tmp strings.Builder
		want := "5 -> 10 -> 15 -> 20"
		current := sl.head

		for current != nil {
			fmt.Fprintf(&tmp, "%d", current.value)
			if current.next != nil {
				fmt.Fprintf(&tmp, " -> ")
			}
			current = current.next
		}

		got := tmp.String()

		if got != want {
			t.Errorf("got: %v, want: %v", got, want)
		}
	})

}
