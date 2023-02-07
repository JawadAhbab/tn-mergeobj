'use strict';

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray").default;
var _slicedToArray = require("@babel/runtime/helpers/slicedToArray").default;
var _objectSpread = require("@babel/runtime/helpers/objectSpread2").default;
var tnValidate = require('tn-validate');
var mergeTwo = function mergeTwo(deep, recessive, dominant) {
  var merged = _objectSpread(_objectSpread({}, recessive), dominant);
  if (!deep) return merged;
  Object.entries(merged).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      prop = _ref2[0],
      domival = _ref2[1];
    if (tnValidate.isObject(domival)) {
      var receval = recessive[prop];
      if (tnValidate.isObject(receval)) {
        merged[prop] = mergeTwo(deep, receval, domival);
      }
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
  if (tnValidate.isBoolean(DeepOrRec)) {
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
exports.mergeobj = mergeobj;
