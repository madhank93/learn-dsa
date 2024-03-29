import { describe, it, expect } from "vitest";
import SinglyLinkedList from "./singly-linked-list";

describe("Singly linked list test", () => {
  it("#addToBack, Add Singly node to the list", () => {
    const sll = new SinglyLinkedList();
    sll.append(5);

    expect(sll.head?.value).toBe(5);
    expect(sll.tail?.value).toBe(5);
    expect(sll.head?.next).toBe(null);
  });

  it("#addToBack, Add more than two nodes to the list", () => {
    const sll = new SinglyLinkedList();
    sll.append(5);
    sll.append(6);
    sll.append(7);

    expect(sll.head?.value).toBe(5);
    expect(sll.head?.next?.value).toBe(6);
    expect(sll.tail?.value).toBe(7);
  });

  it("#remove, Remove an existing node from the list should return true", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);

    expect(sll.remove(10)).toBeTruthy();
  });

  it("#remove, Remove an non-existing element from the list should return false", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);

    expect(sll.remove(1)).toBeFalsy();
  });

  it("#remove, Remove head (first) node from the list", () => {
    const sll = new SinglyLinkedList();
    sll.append(5);
    sll.append(7);
    sll.append(8);
    sll.remove(5);

    expect(sll.head?.value).toBe(7);
  });

  it("#remove, Remove mid node from the list", () => {
    const sll = new SinglyLinkedList();
    sll.append(5);
    sll.append(7);
    sll.append(8);
    sll.append(9);
    sll.remove(7);

    expect(sll.head?.next?.value).toBe(8);
  });

  it("#remove, Remove last node from the list", () => {
    const sll = new SinglyLinkedList();
    sll.append(5);
    sll.append(7);
    sll.append(8);
    sll.append(9);
    sll.remove(9);

    expect(sll.tail?.value).toBe(8);
  });

  it("#remove, Remove Singly node from the list", () => {
    const sll = new SinglyLinkedList();
    sll.append(5);
    sll.remove(5);

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
  });

  it("#remove, Remove node from an empty list", () => {
    const sll = new SinglyLinkedList();
    expect(() => sll.remove(5)).toThrowError("Singly linked list is empty");
  });

  it("#insertAfter, Insert a node in the middle after the search node", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.append(12);
    sll.insert(10, 11);

    expect(sll.head?.next?.value).toBe(11);
  });

  it("#insertAfter, Insert a node after the tail", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.append(20);
    sll.insert(20, 30);

    expect(sll.tail?.value).toBe(30);
  });

  it("#insertAfter, Should return true if a node is found", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.append(20);

    expect(sll.insert(20, 30)).toBeTruthy();
  });

  it("#insertAfter, Should return false if a node is not found", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.append(20);

    expect(sll.insert(99, 30)).toBeFalsy();
  });

  it("#insertAfter, Insert node into an empty list", () => {
    const sll = new SinglyLinkedList();
    expect(() => sll.insert(5, 10)).toThrowError("Singly linked list is empty");
  });

  it("#get, Access list the by index", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.append(20);

    expect(sll.get(0)).toBe(10);
    expect(sll.get(1)).toBe(20);
  });

  it("#get, Access list the by index out of range", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.append(20);

    expect(sll.get(2)).toBeUndefined();
    expect(sll.get(-1)).toBeUndefined();
  });

  it("#push, Push a node into the list", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.append(20);
    sll.push(30);

    expect(sll.tail?.value).toBe(30);
  });

  it("#push, Push a node into the empty list", () => {
    const sll = new SinglyLinkedList();
    sll.push(10);
    sll.push(20);
    sll.push(30);

    expect(sll.tail?.value).toBe(30);
  });

  it("#push, Add a node into the list using append, push and insert", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.push(20);
    sll.insert(20, 30);

    expect(sll.head?.value).toBe(10);
    expect(sll.tail?.value).toBe(30);
  });

  it("#pop, Remove a last item from the list", () => {
    const sll = new SinglyLinkedList();
    sll.append(10);
    sll.append(20);
    sll.pop();

    expect(sll.tail?.value).toBe(10);

    sll.push(20);
    sll.pop();

    expect(sll.tail?.value).toBe(10);
  });

  it("#pop, Remove a node from the empty list", () => {
    const sll = new SinglyLinkedList();

    expect(sll.pop()).toBeUndefined();
  });

  it("#reverse, Reverse a singly linked list", () => {
    const sll = new SinglyLinkedList();

    sll.append(1);
    sll.append(2);
    sll.append(3);
    sll.append(4);
    sll.append(5);
    sll.reverse();

    expect(sll.head?.value).toBe(5);
    expect(sll.head?.next!.value).toBe(4);

    expect(sll.tail?.value).toBe(1);
    expect(sll.tail?.next).toBeNull();
  });
});
