class Sorter {
  constructor(public collection: number[]) {}

  getSum() {
    console.log(this.collection.reduce((acc, cur) => cur + acc, 0))
  }

  sort(): void {
    // bubble sort bad
    const { collection } = this
    const { length } = collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (collection[j] > collection[j + 1]) {
          const leftHand = collection[j]
          collection[j] = collection[j + 1]
          collection[j + 1] = leftHand
        }
      }
    }
    console.log(collection)
  }
}

const sorter = new Sorter([1,5,100,4,4])
sorter.sort()
