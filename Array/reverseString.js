//My Solution
const str = "Anmol is a good boy";
const arr = str.split("");
console.log(arr);
let i = 0;
let j = arr.length - 1;
while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
// console.log(arr.join(""));

//ZTM Solution 1 

function reverseString(str) {
    const backwards = [];
    const totalItems = str.length;
    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join("");
}

// console.log(reverseString("Anmol is a good boy"));

// ZTM Solution 2
const reverseString2 = str => str.split("").reverse().join("");
console.log(reverseString2("Anmol is a good boy"));
