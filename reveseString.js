function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  console.log(reversed);
}
const me = "Hi, my name is Yamin.";
reverseString(me);
