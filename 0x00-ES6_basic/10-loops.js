export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    const newItem = appendString + item;
    const idx = array.indexOf(item);
    // eslint-disable-next-line no-param-reassign
    array[idx] = newItem;
  }

  return array;
}
