"use strict";
// primitives data types
// string types
var fullName = "Kakon Debnath";
// number types
var mobileNumber = 1748902839;
// boolean types
var isRegistered = true;
// undefined types
var text = undefined;
// null types
var data = null;
// non primitive types
// array types
var names = ["kakon", "roni"];
var phoneNumbers = [123, 124];
// tuple types 
var nameAge = ["john", 35];
// object types
var parson = {
    company: "Google",
    firstName: "John",
    lastName: "doe",
    rollNo: 123,
    phone: 123456,
    languages: ["English", "Bangla", "Hindi"],
    isMarried: true,
};
// function in typescript
function add(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    return num1 + num2;
}
add(5, 10);
var sum = function (num1, num2) { return num1 + num2; };
// object with functions
var user = {
    fName: "Kakon",
    lName: "Debnath",
    balance: 0,
    addBalance: function (balance) {
        return this.balance + balance;
    }
};
// type with array mapping
var array = [1, 2, 3, 4];
var newNumber = array.map(function (n) { return n * n; });
