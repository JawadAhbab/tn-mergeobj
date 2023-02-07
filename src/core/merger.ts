import { ObjectsArray } from '../types/ObjectsArray'
import mergeTwo from './mergeTwo'

export default function (deep: boolean, objs: ObjectsArray) {
  let merged = mergeTwo(deep, objs[0], objs[1])

  const remains = objs.splice(2)
  remains.forEach((dominent) => (merged = mergeTwo(deep, merged, dominent)))

  return merged
}
