import { isClassDictionary } from '../../src/types';

describe('types.ts', function () {
    it('Should return false for an empty object arg', function(){
        const output = isClassDictionary({});
        expect(output).toBeFalsy;
    });

    it('Should return false for a given string arg', function (){
        let output = isClassDictionary('');
        expect(output).toBeFalsy;
        output = isClassDictionary('dsadsa');
        expect(output).toBeFalsy;
    })

    it('Should return false for a given array arg', function () {
        let output = isClassDictionary([1, 2, 3, 4]);
        expect(output).toBeFalsy;
        output = isClassDictionary(['a', 'bb', 'ccc', 'dddd']);
        expect(output).toBeFalsy;
    })
    it('Should return true for a given truthy object, arg', function() {
        let output = isClassDictionary({
            class1: true,
            class2: 0,
            class3: null,
            class4: undefined,
            1: 'ciao'
        })

        expect(output).toBeTruthy()
    })

});