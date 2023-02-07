import { AnyObject } from 'tn-typescript';
export declare const mergeobj: typeof mergeobj_;
declare function mergeobj_<T>(deep: boolean, recessive: T, dominant: AnyObject, ...dominants: AnyObject[]): T;
declare function mergeobj_<T>(recessive: T, dominant: AnyObject, ...dominants: AnyObject[]): T;
export {};
