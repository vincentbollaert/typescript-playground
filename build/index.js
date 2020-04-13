"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.getSum = function () {
        console.log(this.collection.reduce(function (acc, cur) { return cur + acc; }, 0));
    };
    Sorter.prototype.sort = function () {
        // bubble sort bad
        var collection = this.collection;
        var length = collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (collection[j] > collection[j + 1]) {
                    var leftHand = collection[j];
                    collection[j] = collection[j + 1];
                    collection[j + 1] = leftHand;
                }
            }
        }
        console.log(collection);
    };
    return Sorter;
}());
var sorter = new Sorter([1, 5, 100, 4, 4]);
sorter.sort();
