import { AnyObject } from 'tn-typescript';
export declare const mergeobj: typeof mergeobjfn;
declare function mergeobjfn<T>(deep: boolean, recessive: T, dominant: AnyObject, ...dominants: AnyObject[]): T;
declare function mergeobjfn<T>(recessive: T, dominant: AnyObject, ...dominants: AnyObject[]): T;
export {};
