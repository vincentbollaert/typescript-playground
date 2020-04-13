import { Sortable } from './interface'

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    // bubble sort bad
    const { collection } = this
    const { length } = collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (collection.compare(j, j + 1)) {
          collection.swap(j, j + 1)
        }
      }
    }
  }
}
