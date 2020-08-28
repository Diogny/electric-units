"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var units_1 = tslib_1.__importDefault(require("../units"));
var amp = new units_1.default("25mA");
//console.log(amp);
show(amp);
var amp2 = new units_1.default("3μA");
show(amp2);
var add = amp.add(amp2);
show(add);
console.log(amp.toString(), ' == ', amp2.toString(), amp.equal(amp2));
function show(unit) {
    if (unit) {
        console.log(unit.toString());
        console.log('unit: ', unit.prefix, unit.unit);
        console.log('value: ', unit.value);
        console.log('exp: ', unit.exp);
        console.log('expont: ', unit.exponent);
    }
    else {
        console.log("NaN");
    }
}
