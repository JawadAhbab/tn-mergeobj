import { isObject } from 'tn-validate'
import { AnyObject } from 'tn-typescript'

export const mergeTwo = (deep: boolean, recessive: AnyObject, dominant: AnyObject) => {
  const merged = { ...recessive, ...dominant }
  if (!deep) return merged

  Object.entries(merged).forEach(([prop, domival]) => {
    if (isObject(domival)) {
      const receval = recessive[prop]

      if (isObject(receval)) {
        merged[prop] = mergeTwo(deep, receval, domival)
      }
    }
  })

  return merged
}
