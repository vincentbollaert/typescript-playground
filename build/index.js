"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var StringCollection_1 = require("./StringCollection");
// const numbersCollection = new NumbersCollection([1,50,3,20])
// const sorter = new Sorter(numbersCollection)
var stringCollection = new StringCollection_1.StringCollection('I am a random string sort me');
var sorter = new sorter_1.Sorter(stringCollection);
sorter.sort();
console.log(stringCollection.collection);
