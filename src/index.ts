import { isBoolean } from 'tn-validate'
import { ObjectsArray } from './types/ObjectsArray'
import merger from './core/merger'
import { AnyObject } from 'tn-typescript'

export const mergeobj = mergeobj_

function mergeobj_<T>(deep: boolean, recessive: T, dominant: AnyObject, ...dominants: AnyObject[]): T
function mergeobj_<T>(recessive: T, dominant: AnyObject, ...dominants: AnyObject[]): T
function mergeobj_<T>(DeepOrRec: boolean | T, RecOrDom: T, ...DomOrDoms: AnyObject[]): T {
  let deep = true
  let recessive: AnyObject
  let dominent: AnyObject
  let dominents: AnyObject[]

  if (isBoolean(DeepOrRec)) {
    deep = DeepOrRec
    recessive = RecOrDom as AnyObject
    dominent = DomOrDoms[0]
    dominents = DomOrDoms.splice(1)
  } else {
    recessive = DeepOrRec as AnyObject
    dominent = RecOrDom as AnyObject
    dominents = DomOrDoms
  }

  const objs: ObjectsArray = [recessive, dominent, ...dominents]

  return merger(deep, objs) as unknown as T
}
