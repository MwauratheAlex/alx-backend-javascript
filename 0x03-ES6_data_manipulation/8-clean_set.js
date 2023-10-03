export default function cleanSet(set, startString) {
  if (!startString) return '';

  const results = [];

  set.forEach((str) => {
    if (str.startsWith(startString)) {
      results.push(str.slice(startString.length));
    }
  });

  return results.join('-');
}
