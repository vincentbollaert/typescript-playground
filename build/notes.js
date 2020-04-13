"use strict";
// constructor modifier
// -----------------------------
// class properties can be defined and initialised inside constructor,
// or simply by passing in a modifier to constructor argument
var Notes1 = /** @class */ (function () {
    function Notes1(collection) {
        this.collection = collection;
    }
    return Notes1;
}());
// eauals
var Notes2 = /** @class */ (function () {
    function Notes2(collection) {
        this.collection = collection;
    }
    return Notes2;
}());
// pipe and type guard
// -----------------------------
var Notes3 = /** @class */ (function () {
    // note how you can accesss all array properties inside sort
    function Notes3(list) {
        this.list = list;
    }
    Notes3.prototype.sort = function () {
        // this.list.
    };
    return Notes3;
}());
var Notes4 = /** @class */ (function () {
    function Notes4(list) {
        this.list = list;
    }
    Notes4.prototype.sort = function () {
        // now you can only access properties shared by arrays and strings
        // this.list.
    };
    Notes4.prototype.sort2 = function () {
        // now you have access to array properties again
        if (this.list instanceof Array) {
            // this.list.
        }
    };
    return Notes4;
}());
// get method modifier
// -----------------------------
// adding get before method means you do not have to call it to retrieve value
var Notes5 = /** @class */ (function () {
    function Notes5() {
        this.name = 'Vincent';
    }
    Object.defineProperty(Notes5.prototype, "displayName", {
        get: function () {
            console.log(this.name);
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Notes5;
}());
var test = new Notes5();
test.displayName;
