import classNames from '../../src/classNames';

describe('classNames.ts', () => {
    it('Should keeps object keys with truthy values', function () {
        const output = classNames({
			a: true,
			b: false,
			c: 0,
			d: null,
			e: undefined,
			f: 1
		});
        expect(output).toBe('a f');
	});
	
	it('joins arrays of class names and ignore falsy values', function () {
		const output = classNames('a', 0, null, undefined, true, 1, 'b');
		expect(output).toBe('a 1 b');
	});

	it('supports heterogenous arguments', function () {
		const output = classNames({a: true}, 'b', 0);
		expect(output).toBe('a b');
	});
	it('should be trimmed', function () {
		const output = classNames('', 'b', {}, '');
		expect(output).toBe('b');
	});

	it('returns an empty string for an empty configuration', function () {
		const output = classNames({});
		expect(output).toBe('');
	});

	it('supports an array of class names', function () {
		const output = classNames(['a', 'b']);
		expect(output).toBe('a b');
	});

	it('joins array arguments with string arguments', function () {
		let output = classNames(['a', 'b'], 'c');
		expect(output).toBe('a b c');
		output = classNames('c', ['a', 'b']);
		expect(output).toBe('c a b');
	});

	it('handles multiple array arguments', function () {
		let output = classNames(['a', 'b'], ['c', 'd']);
		expect(output).toBe('a b c d');
	});
	it('handles arrays that include falsy and true values', function () {
		let output = classNames(['a', 0, null, undefined, false, true, 'b']);
		expect(output).toBe('a b');
	});

	it('handles arrays that include arrays', function () {
		const output = classNames(['a', ['b', 'c']]);
		expect(output).toBe('a b c');
	});

	it('handles arrays that include objects', function () {
		const output = classNames(['a', {b: true, c: false}]);
		expect(output).toBe('a b');
	});

	it('handles deep array recursion', function () {
		const output = classNames(['a', ['b', ['c', {d: true}]]]);
		expect(output).toBe('a b c d');
	});

	it('handles arrays that are empty', function () {
		const output = classNames('a', []);
		expect(output).toBe('a');
	});

	it('handles nested arrays that have empty nested arrays', function () {
		const output = classNames('a', [[]]);
		expect(output).toBe('a');
	});

	it('handles all types of truthy and falsy property values as expected', function () {
		const output = classNames({
			// falsy:
			null: null,
			emptyString: "",
			noNumber: NaN,
			zero: 0,
			negativeZero: -0,
			false: false,
			undefined: undefined,

			// truthy (literally anything else):
			nonEmptyString: "foobar",
			whitespace: ' ',
			function: Object.prototype.toString,
			emptyObject: {},
			nonEmptyObject: {a: 1, b: 2},
			emptyList: [],
			nonEmptyList: [1, 2, 3],
			greaterZero: 1
		});
		expect(output).toBe('nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero');
	});

	it('handles toString() method defined on object', function () {
		const output = classNames({
			toString: function () { return 'classFromMethod'; }
		});
		expect(output).toBe('classFromMethod');
	});
});