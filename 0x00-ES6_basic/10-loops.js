export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const item of newArray) {
    const newItem = appendString + item;
    const idx = newArray.indexOf(item);
    newArray[idx] = newItem;
  }

  return newArray;
}
