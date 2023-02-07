import { mergeobj } from '../src/index'

const recessive = {
  alpha: true,
  beta: 1234,
  gama: { ga: true, gb: 'string' },
}

const dominant = {
  alpha: false,
  gama: { another: true },
}

const shallow = mergeobj(false, recessive, dominant)
const deep = mergeobj(recessive, dominant)

console.log(shallow)
console.log(deep)
