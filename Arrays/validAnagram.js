function validAnagram(s, t) {
  let map = {};

  // fix length check
  if (s.length !== t.length) {
    return false;
  }

  // build map
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]] += 1;
    }
  }

  // reduce using t
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return false;
    }
    map[t[i]]--;
  }

  return true;
}

console.log(validAnagram("anagram", "magraan"));
