// constructor modifier
// -----------------------------
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


// pipe and type guard
// -----------------------------

class Notes3 {
  // note how you can accesss all array properties inside sort
  constructor(public list: number[]) {}

  sort() {
    // this.list.
  }
}

class Notes4 {
  constructor(public list:number[] | string) {}

  sort() {
    // now you can only access properties shared by arrays and strings
    // this.list.
  }

  sort2() {
    // now you have access to array properties again
    if (this.list instanceof Array) {
      // this.list.
    }
  }
}


// get method modifier
// -----------------------------
// adding get before method means you do not have to call it to retrieve value

class Notes5 {
  name: string = 'Vincent';

  get displayName(): string {
    console.log(this.name)
    return this.name
  }
}
let test = new Notes5()
test.displayName

