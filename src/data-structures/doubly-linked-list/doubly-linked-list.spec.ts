import { describe, it, expect } from "vitest";
import DoublyLinkedList from "./doubly-linked-list";

describe("Doubly linked list test", () => {
  it("#append, Add a single node to the list", () => {
    const dll = new DoublyLinkedList();
    dll.append(5);

    expect(dll.head?.value).toBe(5);
    expect(dll.tail?.value).toBe(5);
    expect(dll.head?.previous).toBeNull();
    expect(dll.head?.next).toBeNull();
    expect(dll.tail?.previous).toBeNull();
    expect(dll.tail?.next).toBeNull();
  });

  it("#append, Add more than two nodes to the list", () => {
    const dll = new DoublyLinkedList();
    dll.append(1);
    dll.append(2);
    dll.append(3);

    expect(dll.head?.value).toBe(1);
    expect(dll.head?.next?.value).toBe(2);
    expect(dll.head?.next?.next?.value).toBe(3);
    expect(dll.tail?.value).toBe(3);
    expect(dll.tail?.previous?.value).toBe(2);
    expect(dll.tail?.previous?.previous?.value).toBe(1);
  });

  it("#prepend, Prepend a node to the list", () => {
    const dll = new DoublyLinkedList();
    dll.prepend(5);

    expect(dll.head?.value).toBe(5);
    expect(dll.tail?.value).toBe(5);
    expect(dll.head?.previous).toBeNull();
    expect(dll.head?.next).toBeNull();
    expect(dll.tail?.previous).toBeNull();
    expect(dll.tail?.next).toBeNull();
  });

  it("#prepend, Prepend more than two nodes to the list", () => {
    const dll = new DoublyLinkedList();
    dll.prepend(1);
    dll.prepend(2);
    dll.prepend(3);

    expect(dll.head?.value).toBe(3);
    expect(dll.head?.next?.value).toBe(2);
    expect(dll.head?.next?.next?.value).toBe(1);
    expect(dll.tail?.value).toBe(1);
    expect(dll.tail?.previous?.value).toBe(2);
    expect(dll.tail?.previous?.previous?.value).toBe(3);
  });

  it("#insertBefore, Should return true if a node is found", () => {
    const dll = new DoublyLinkedList();
    dll.append(3);
    dll.append(4);
    dll.prepend(1);

    expect(dll.insertBefore(3, 2)).toBeTruthy();
  });

  it("#insertBefore, Should return false if a node is not found", () => {
    const dll = new DoublyLinkedList();
    dll.append(3);
    dll.append(4);
    dll.prepend(1);

    expect(dll.insertBefore(100, 2)).toBeFalsy();
  });

  it("#insertBefore, Should throw an error if node is empty", () => {
    const dll = new DoublyLinkedList();

    expect(() => dll.insertBefore(100, 2)).toThrowError(
      "Doubly linked list is empty"
    );
  });
});
