// notes

// class properties can be defined and initialised inside constructor,
// or simply by passing in a modifier to constructor argument

class Notes1 {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }
}

// eauals

class Notes2 {
  constructor(public collection: number[]) {}
}
