import { AnyObject } from 'tn-typescript'
import { isBoolean } from 'tn-validate'
import { merger } from './core/merger'
import { ObjectsArray } from './core/ObjectsArray'

export const mergeobj = mergeobjfn
function mergeobjfn<T>(deep: boolean, recessive: T, dominant: AnyObject, ...dominants: AnyObject[]): T
function mergeobjfn<T>(recessive: T, dominant: AnyObject, ...dominants: AnyObject[]): T
function mergeobjfn<T>(DeepOrRec: boolean | T, RecOrDom: T, ...DomOrDoms: AnyObject[]): T {
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
