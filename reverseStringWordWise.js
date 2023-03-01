function reverseString(string) {
  let splitArray = string.split(" ");
  reverse = "";
  for (let i = splitArray.length - 1; i >= 0; i--) {
    reverse = reverse + " " + splitArray[i];
  }
  return reverse;
}
const string = "Hi, my name is Yamin.";
console.log(reverseString(string));
