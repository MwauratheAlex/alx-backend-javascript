export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const results = [];

  set.forEach((str) => {
    if (str.startsWith(startString)) {
      results.push(str.slice(startString.length));
    }
  });

  return results.join('-');
}
