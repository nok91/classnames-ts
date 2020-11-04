import getArgType from '../../src/getArgType';

describe('getArgType.ts', () => {
    it('Should return "string" if the arg is a string type', () => {
        const output = getArgType('This is a string');
        expect(output).toBe('string');
    });
    it('Should return "object" if the arg is a object type', () => {
        let output = getArgType({});
        expect(output).toBe('object');
        output = getArgType({
            'test': 'this a test',
            'number': 6999,
            'array': [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        });
        expect(output).toBe('object');
    });
    it('Should return "array" if the arg is a array type', () => {
        const output = getArgType(['a', 'b', 'c']);
        expect(output).toBe('array');
    });
    it('Should return "number" if the arg is a number type', () => {
        let output = getArgType(1);
        expect(output).toBe('number');
        output = getArgType('1991');
        expect(output).not.toBe('number'); 
    });

    it('Should return "boolean" if the arg is a boolean type', () => {
        let output = getArgType(true);
        expect(output).toBe('boolean');
        output = getArgType(false);
        expect(output).toBe('boolean');
    });

    it('Should return "undefined" if the arg is a undefined', () => {
        let output = getArgType(undefined);
        expect(output).toBe('undefined');
    });

    it('Should return "null" if the arg is a null', () => {
        let output = getArgType(null);
        expect(output).toBe('null');
    });
})