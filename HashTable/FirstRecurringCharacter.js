//My Solution

const firstRecurringCharacter = array => {
  const set = new Set();
  for (let i in array) {
    if (set.has(array[i])) {
      return array[i];
    } else {
      set.add(array[i]);
    }
  }
  return undefined;
};

console.log(firstRecurringCharacter([2, 3, 2, 1, 3]));

//ZTM Solution

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]);
