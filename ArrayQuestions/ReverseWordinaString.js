function reverseWord(s) {
  let n = s.length;
  let result = "";
  let i = n - 1;
  while (i >= 0) {
    while (i >= 0 && s[i] == " ") {
      i--; //Moving i unless we encounter the first letter
    }
    if (i < 0) {
      break;
    }
    let wordEnd = i;
    while (i >= 0 && s[i] !== " ") {
      i--;
    }
    let currentWord = "";
    for (let k = i + 1; k <= wordEnd; k++) {
      currentWord += s[k];
    }
    if (result.length > 0) {
      result += " " + currentWord;
    } else {
      result += currentWord;
    }
  }
  return result;
}
const s = "  hello world  ";
console.log(reverseWord(s));
