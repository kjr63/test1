function add (a,b) { return ( a + b ) };
function generateGreeting (name) { return "Hello "+name; }

test (
	'should add two numbers',
	function () { 
		expect(add(2,3)).toBe(5);
	}
)

test (
	'greeting for Kalle',
	function () {
		const received = generateGreeting ("Kalle");
		expect(received).toBe("Hello Kalle");
	}
)
