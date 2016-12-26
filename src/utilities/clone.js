/**
 * cloneWithoutKeys
 *
 * Clone the given object without the
 * given keys
 */
export default (obj, keys = []) => {
  const acc = {};

  Object.keys(obj).filter(key => {
    return keys.indexOf(key) === -1;
  }).forEach(key => {
    acc[key] = obj[key];
  });

  return acc;
};
