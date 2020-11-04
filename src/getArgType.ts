import { ArgType } from './types';

function getArgType(arg: ArgType) {
    let output = '';

    if(Array.isArray(arg)) {
        output = 'array'
    } else if ( arg === null ) {
        output = 'null'
    } else {
        output = typeof(arg);
    }

    return output;
}

export default getArgType;
