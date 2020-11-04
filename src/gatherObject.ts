import { ClassDictionary } from './types';

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

function gatherObject(arg: ClassDictionary) {
    let classes = [];
    if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
    } else {
        for (const key in arg) {
            if (hasOwnProperty.call(arg, key) && arg[key]) {
                classes.push(key)
            }
        }
    }

    return classes.join(' ');
}

export default gatherObject;
