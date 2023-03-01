let names = ['a', 'b', 'c', 'a', 'b', 'd', 'e', 'f', 'c', 'd', 'a', 'f'];

function duplicateRemover(names) {
  let newNames = [];
  for (let i = 0; i <names.length; i++) {
    if (newNames.includes(names[i]) == false) {
      newNames.push(names[i]);
    }
  }
  return newNames;
}
let removedNames=duplicateRemover(names);
console.log(removedNames);