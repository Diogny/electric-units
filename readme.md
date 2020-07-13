
## I'm using pnpm for a more efficient and clear package.json

Used in my testing website [Electric Circuits](http://diogny.com/tests/circuits.php).

	let
		unit = new Unit('2.5mW');
	
	unit.toString() == 2.5mW
	unit.value		== 2.5
	unit.prefix		== m
	unit.unit		== W
	