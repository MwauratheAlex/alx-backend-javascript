export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (set.has(item) === false) return false;
  }

  return true;
}
