import { Sorter } from './sorter'
import { NumbersCollection } from './NumbersCollection'
import { StringCollection } from './StringCollection'

// const numbersCollection = new NumbersCollection([1,50,3,20])
// const sorter = new Sorter(numbersCollection)
const stringCollection = new StringCollection('I am a random string sort me')
const sorter = new Sorter(stringCollection)
sorter.sort()
console.log(stringCollection.collection)
