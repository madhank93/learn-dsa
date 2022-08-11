import { describe, it, expect } from "vitest";
import SingleLinkedList from "./single-linked-list";

describe("Single linked list test", () => {
  it("#addToBack, Add single node to the list", () => {
    let sll = new SingleLinkedList();
    sll.append(5);

    expect(sll.head?.value).toBe(5);
    expect(sll.tail?.value).toBe(5);
    expect(sll.head?.next).toBe(null);
  });

  it("#addToBack, Add more than two nodes to the list", () => {
    let sll = new SingleLinkedList();
    sll.append(5);
    sll.append(6);
    sll.append(7);

    expect(sll.head?.value).toBe(5);
    expect(sll.head?.next?.value).toBe(6);
    expect(sll.tail?.value).toBe(7);
  });

  it("#remove, Remove an existing node from the list should return true", () => {
    let sll = new SingleLinkedList();
    sll.append(10);

    expect(sll.remove(10)).toBeTruthy();
  });

  it("#remove, Remove an non-existing element from the list should return false", () => {
    let sll = new SingleLinkedList();
    sll.append(10);

    expect(sll.remove(1)).toBeFalsy();
  });

  it("#remove, Remove head (first) node from the list", () => {
    let sll = new SingleLinkedList();
    sll.append(5);
    sll.append(7);
    sll.append(8);
    sll.remove(5);

    expect(sll.head?.value).toBe(7);
  });

  it("#remove, Remove mid node from the list", () => {
    let sll = new SingleLinkedList();
    sll.append(5);
    sll.append(7);
    sll.append(8);
    sll.append(9);
    sll.remove(7);

    expect(sll.head?.next?.value).toBe(8);
  });

  it("#remove, Remove last node from the list", () => {
    let sll = new SingleLinkedList();
    sll.append(5);
    sll.append(7);
    sll.append(8);
    sll.append(9);
    sll.remove(9);

    expect(sll.tail?.value).toBe(8);
  });

  it("#remove, Remove single node from the list", () => {
    let sll = new SingleLinkedList();
    sll.append(5);
    sll.remove(5);

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
  });

  it("#remove, Remove node from an empty list", () => {
    let sll = new SingleLinkedList();
    expect(() => sll.remove(5)).toThrowError("Single linked list is empty");
  });

  it("#insertAfter, Insert a node in the middle after the search node", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.append(12);
    sll.insert(10, 11);

    expect(sll.head?.next?.value).toBe(11);
  });

  it("#insertAfter, Insert a node after the tail", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.append(20);
    sll.insert(20, 30);

    expect(sll.tail?.value).toBe(30);
  });

  it("#insertAfter, Should return true if a node is found", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.append(20);

    expect(sll.insert(20, 30)).toBeTruthy();
  });

  it("#insertAfter, Should return false if a node is not found", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.append(20);

    expect(sll.insert(99, 30)).toBeFalsy();
  });

  it("#insertAfter, Insert node into an empty list", () => {
    let sll = new SingleLinkedList();
    expect(() => sll.insert(5, 10)).toThrowError("Single linked list is empty");
  });

  it("#get, Access list the by index", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.append(20);

    expect(sll.get(0)).toBe(10);
    expect(sll.get(1)).toBe(20);
  });

  it("#get, Access list the by index out of range", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.append(20);

    expect(sll.get(2)).toBeUndefined();
    expect(sll.get(-1)).toBeUndefined();
  });

  it("#push, Push a node into the list", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.append(20);
    sll.push(30);

    expect(sll.tail?.value).toBe(30);
  });

  it("#push, Push a node into the empty list", () => {
    let sll = new SingleLinkedList();
    sll.push(10);
    sll.push(20);
    sll.push(30);

    expect(sll.tail?.value).toBe(30);
  });

  it("#push, Add a node into the list using append, push and insert", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.push(20);
    sll.insert(20, 30);

    expect(sll.head?.value).toBe(10);
    expect(sll.tail?.value).toBe(30);
  });

  it("#pop, Remove a last item from the list", () => {
    let sll = new SingleLinkedList();
    sll.append(10);
    sll.append(20);
    sll.pop();

    expect(sll.tail?.value).toBe(10);

    sll.push(20);
    sll.pop();

    expect(sll.tail?.value).toBe(10);
  });

  it("#pop, Remove a node from the empty list", () => {
    let sll = new SingleLinkedList();

    expect(sll.pop()).toBeUndefined();
  });

  it("#reverse, Reverse a singly linked list", () => {
    let sll = new SingleLinkedList();

    sll.append(1);
    sll.append(2);
    sll.append(3);
    sll.append(4);
    sll.append(5);
    sll.reverse();

    expect(sll.head?.value).toBe(5);
    expect(sll.head?.next!.value).toBe(4);

    expect(sll.tail?.value).toBe(1);
  });
});
