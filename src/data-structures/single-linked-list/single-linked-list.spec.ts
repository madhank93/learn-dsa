import { describe, it, expect } from "vitest";
import SingleLinkedList from "./single-linked-list";

describe("Single linked list test", () => {
  it("#addToBack, Add single node to the list", () => {
    let sll = new SingleLinkedList();

    // Adding first node
    sll.addToBack(5);
    expect(sll.head?.value).toBe(5);
    expect(sll.tail?.value).toBe(5);
    expect(sll.head?.next).toBe(null);
  });

  it("#addToBack, Add more than two nodes to the list", () => {
    let sll = new SingleLinkedList();
    sll.addToBack(5);
    sll.addToBack(6);
    sll.addToBack(7);
    expect(sll.head?.value).toBe(5);
    expect(sll.head?.next?.value).toBe(6);
    expect(sll.tail?.value).toBe(7);
  });

  it("#remove, Remove an existing node from the list should return true", () => {
    let sll = new SingleLinkedList();
    sll.addToBack(10);
    expect(sll.remove(10)).toBeTruthy();
  });

  it("#remove, Remove an non-existing element from the list should return false", () => {
    let sll = new SingleLinkedList();
    sll.addToBack(10);
    expect(sll.remove(1)).toBeFalsy();
  });

  it("#remove, Remove head (first) node from the list", () => {
    let sll = new SingleLinkedList();

    sll.addToBack(5);
    sll.addToBack(7);
    sll.addToBack(8);
    sll.remove(5);

    expect(sll.head?.value).toBe(7);
  });

  it("#remove, Remove mid node from the list", () => {
    let sll = new SingleLinkedList();

    // Remove mid node
    sll.addToBack(5);
    sll.addToBack(7);
    sll.addToBack(8);
    sll.addToBack(9);
    sll.remove(7);

    expect(sll.head?.next?.value).toBe(8);
  });

  it("#remove, Remove last node from the list", () => {
    let sll = new SingleLinkedList();
    sll.addToBack(5);
    sll.addToBack(7);
    sll.addToBack(8);
    sll.addToBack(9);
    sll.remove(9);

    expect(sll.tail?.value).toBe(8);
  });
});
