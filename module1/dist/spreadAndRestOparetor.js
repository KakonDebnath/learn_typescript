"use strict";
// Spread and rest operator functions
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var list1 = ["a", "b", "c", "d", "e"];
var list2 = ["f", "g", "h", "i"];
var list3 = __spreadArray(__spreadArray([], list1, true), list2, true);
var teacher = {
    math: "Rasel",
    bangla: "Roni",
    english: "Moni"
};
var teacher1 = {
    religion: "Kobita",
};
var teachers = __assign(__assign({}, teacher), teacher1);
// with function
var allTeachers = function () {
    var teachers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        teachers[_i] = arguments[_i];
    }
    teachers.forEach(function (teacher) { return console.log(teacher); });
};
var age = 15;
if (age >= 18) {
    console.log("adult");
}
else {
    console.log("not adult");
}
