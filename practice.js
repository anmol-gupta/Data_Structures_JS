// // const large = new Array(10000).fill('nemo');
// // function findNemo(array) {
// //     let t0 = performance.now();
// //     for (let i = 0 ; i < array.length ; i++) {
// //         if(array[i] == 'nemo') {
// //             console.log("Found Nemo!!");
// //         }
// //     }
// //     let t1 = performance.now();
// //     console.log("It took "+ t1-t0 + " milliseconds");
// // }

// // findNemo(large);

// const arr = [1,2,3,4,5];

// const multiply = num => {
//     num.forEach(element => {
//         console.log(element*2);
//     });
// }

// multiply(arr);

// console.log("lks".length);

// const arr = [1,3,4,5];
// const multiply = array => {
//     array.forEach(element => {
//         array.push(element*2);
//     });
// }
// multiply(arr);
// console.log(arr);

// const array1 = ['a','b','c','d'];
// const array2 = ['a','z','z'];

// function commonElement(arr1,arr2) {
//     return (arr1.some(item => arr2.includes(item)));
// }

// console.log(commonElement(array1,array2));

// function hasSumPair(array,sum) {
//     const mySet = new Set();
//     for(let i=0;i<array.length;i++) {
//         if(mySet.has(array[i])) {
//             return true;
//         } else {
//             mySet.add(sum-array[i]);
//         }
//     }
//     return false;
// }

// console.log(hasSumPair([6,3,1,2,9,7],9));

// const strings = ['a','b','c','d'];

// strings.append('v');
// strings.push('w');

// strings.pop();
// strings.pop();

// strings.unshift('x');

// console.log(strings);

// strings.splice(2,1,'y','z');

// console.log(strings);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    if (this.length > 0) {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    } else {
      console.log("Underflow");
    }
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
  }
  shiftIndex(index) {
    if (0 <= index && index < this.length) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
    else {
        console.log("Underflow from shiftIndex");
    }
  }
}

const newArray = new MyArray();
newArray.push("hI");
newArray.push("you");
newArray.push("Anmol");
newArray.pop();
newArray.delete(2);
// newArray.delete(1);

console.log(newArray);
