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
});
