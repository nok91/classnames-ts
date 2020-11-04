import getArgType from './getArgType';

export interface ClassDictionary {
	[key: string]: any;
}

export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean ;

export type ArgType = string | number | Array<any> | object | undefined | null | boolean;

export interface ClassArray extends Array<ClassValue> { }

export function isClassDictionary(arg: any): arg is ClassDictionary {
    
    const argType = getArgType(arg);
    const isEmpty = Object.keys(arg).length === 0;
    
    if(argType !== 'object' || isEmpty) return false
    
    for (const key in arg) {
        if(
            typeof key !== 'string'
        ) {
            return false
        }
    }
    
    return true;
}
