function ValidAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let charcount = {};
  for (let i = 0; i <= s.length; i++) {
    const char = s[i];
    charcount[char] = (charcount[char] || 0) + 1;
  }
  for (let j = 0; j <= t.length; j++) {
    const char = t[j];
    if (!charcount[char]) {
      return false;
    }
    charcount[char]--;
  }
  return true;
}
const s = "anagram";
const t = "nagaram";
console.log(ValidAnagram(s, t));
