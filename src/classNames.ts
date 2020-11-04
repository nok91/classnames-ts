
import gatherObject from './gatherObject';
import getArgType from './getArgType';
import { isClassDictionary, ClassArray } from './types';

function classnames(...args: ClassArray): string {
    let classes = [];

    for (const arg of args) {
        if (!arg) continue;
        const argType = getArgType(arg);

        switch(argType) {
            case 'number':
            case 'string':
                classes.push(arg);
                break;
            case 'array': 
                const recursiveClasses = classnames(...arg);
                if(recursiveClasses) {
                    classes.push(recursiveClasses);
                }
                break;
            case 'object': 
                if(isClassDictionary(arg)) {
                    classes.push(gatherObject(arg));
                }
                break;
        }
    }

    return classes.join(' ');
}

export default classnames;