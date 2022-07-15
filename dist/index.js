"use strict";

var foo = "str";
var bar = foo !== null && foo !== void 0 ? foo : 'null';
var arr = [];
arr.filter(function (val) {
    return val;
});