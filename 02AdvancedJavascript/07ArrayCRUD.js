let arr = [1, 2, 3, 4, 5];

// push
const arrLength = arr.push(6, 7); // Adds 6 to the end of the array
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log(arrLength);

// pop
const poppedElement = arr.pop(); // Removes the last element (7) from the array
console.log(poppedElement);
console.log(arr);

// shift
const shiftedElement = arr.shift(); // Removes the first element (1) from the array
console.log(shiftedElement);
console.log(arr);

// unshift
const newLength = arr.unshift(0); // Adds 0 to the beginning of the array
console.log(arr);
console.log(newLength);

// slice
const slicedArr = arr.slice(1, 4); // Creates a new array from index 1 to 3 (not including index 4)
const slicedArr1 = arr.slice(2); // Creates a new array from index 2 to the end
const slicedArr2 = arr.slice(-3); // Creates a new array from the last 3 elements
console.log(slicedArr);
console.log(slicedArr1);
console.log(slicedArr2);
console.log(arr); // Original array remains unchanged

// concat
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const concatenatedArr = arrA.concat(arrB); // Combines arrA and arrB into a new array
console.log(concatenatedArr);
