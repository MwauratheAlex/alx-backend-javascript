export default function appendToEachArrayValue(array, appendString) {
  for (let item of array) {
    const newItem = appendString + item;
    array[array.indexOf(item)] = newItem
  }

  return array;
}
