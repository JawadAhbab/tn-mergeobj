import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { isObject, isBoolean } from 'tn-validate';
var mergeTwo = function mergeTwo(deep, recessive, dominant) {
  var merged = _objectSpread(_objectSpread({}, recessive), dominant);
  if (!deep) return merged;
  Object.entries(merged).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      prop = _ref2[0],
      domival = _ref2[1];
    if (isObject(domival)) {
      var receval = recessive[prop];
      if (isObject(receval)) merged[prop] = mergeTwo(deep, receval, domival);
    }
  });
  return merged;
};
var merger = function merger(deep, objs) {
  var merged = mergeTwo(deep, objs[0], objs[1]);
  var remains = objs.splice(2);
  remains.forEach(function (dominent) {
    return merged = mergeTwo(deep, merged, dominent);
  });
  return merged;
};
var mergeobj = mergeobjfn;
function mergeobjfn(DeepOrRec, RecOrDom) {
  var deep = true;
  var recessive;
  var dominent;
  var dominents;
  for (var _len = arguments.length, DomOrDoms = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    DomOrDoms[_key - 2] = arguments[_key];
  }
  if (isBoolean(DeepOrRec)) {
    deep = DeepOrRec;
    recessive = RecOrDom;
    dominent = DomOrDoms[0];
    dominents = DomOrDoms.splice(1);
  } else {
    recessive = DeepOrRec;
    dominent = RecOrDom;
    dominents = DomOrDoms;
  }
  var objs = [recessive, dominent].concat(_toConsumableArray(dominents));
  return merger(deep, objs);
}
export { mergeobj };
