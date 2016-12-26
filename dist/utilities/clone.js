"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * cloneWithoutKeys
 *
 * Clone the given object without the
 * given keys
 */
exports.default = function (obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var acc = {};

  Object.keys(obj).filter(function (key) {
    return keys.indexOf(key) === -1;
  }).forEach(function (key) {
    acc[key] = obj[key];
  });

  return acc;
};