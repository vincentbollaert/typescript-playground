"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCollection = /** @class */ (function () {
    function StringCollection(collection) {
        this.collection = collection;
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: true,
        configurable: true
    });
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
    };
    StringCollection.prototype.swap = function (leftIndex, rightIndex) {
        var stringArray = this.collection.split('');
        var leftHand = stringArray[leftIndex];
        stringArray[leftIndex] = stringArray[rightIndex];
        stringArray[rightIndex] = leftHand;
        this.collection = stringArray.join('');
    };
    return StringCollection;
}());
exports.StringCollection = StringCollection;
