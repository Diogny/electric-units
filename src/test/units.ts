import Unit from "../units";

let amp = new Unit("25mA");

//console.log(amp);
show(amp);

let amp2 = new Unit("3μA");
show(amp2);

let add = amp.add(amp2);
show(add);

console.log(amp.toString(), ' == ', amp2.toString(), amp.equal(amp2));

function show(unit: Unit | undefined) {
	if (unit) {
		console.log(unit.toString());
		console.log('unit: ', unit.prefix, unit.unit);
		console.log('value: ', unit.value);
		console.log('exp: ', unit.exp);
		console.log('expont: ', unit.exponent);
	} else {
		console.log("NaN")
	}
}