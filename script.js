// задача №1
const fill = (arraySize, value) => {
  // решение здесь
  const result = [];
  for (let i = 0; i < arraySize; i += 1) {
    result.push(value);
  }

  return result;
};

// const data = 3;
// const valueToFill = 'a';
// console.log(fill(data, valueToFill))

// задача №2
const reverse = (array) => {
  // решение здесь
  const result = [];
  for (const item of array) {
    result.unshift(item);
  }

  return result;
};

// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  // решение здесь
  const result = [];
  for (const item of array) {
    if (item !== false && item !== undefined && item !== '' && item !== 0 && item !== null) {
      result.push(item);
    }
  }

  return result;
};

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)) // [1, 2, 3]
