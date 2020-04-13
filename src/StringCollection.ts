import { Sortable } from "./interface";

export class StringCollection implements Sortable {
  constructor(public collection: string) {}

  get length(): number {
    return this.collection.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase()
  }

  swap(leftIndex: number, rightIndex: number): void {
    const stringArray = this.collection.split('')
    const leftHand = stringArray[leftIndex]

    stringArray[leftIndex] = stringArray[rightIndex]
    stringArray[rightIndex] = leftHand
    this.collection = stringArray.join('')
  }
}
