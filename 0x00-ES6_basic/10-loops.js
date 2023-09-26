export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [...array];

  for (const [idx, val] of resultArray.entries()) {
    resultArray[idx] = appendString + val;
  }

  return resultArray;
}
