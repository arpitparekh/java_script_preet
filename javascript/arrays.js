// arrays

// arrays is a fixed set of vaules under single name

let a = 12;
let b = 23;
let d = 64;
let e = 95;
let f = 996;
let g = 1787;

let numbers = [12, 34, 786, 4365, 86, 5, 43, 34, 445]; // array is group of values
// 0   1    2     3    4  5   6   7   index
console.log(numbers);
console.log(numbers[4]);

let names = ["preet", "dhroovi", "kanishka", "yash"];
console.log(names[0]);

let data = [12, "helo", "hi", ""];
console.log(data);

numbers[3] = 56;

console.log(numbers);

// for (n in numbers) {
//   console.log(n);
// }

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

for (let n in numbers) {
  console.log(n);
}

for (let n of numbers) {
  console.log(n);
}

console.log("Length of Array is : " + numbers.length);
console.log("Length of Array is : " + names.length);
console.log("Length of Array is : " + data.length);

for (let i = 0; i < numbers.length; i++) {
  // 0..8
  console.log(numbers[i]);
}

console.log(names);
names.push("maulik");
console.log(names);
names.pop();
console.log(names);

// push and pop method to add and remove elements from array in javascript

console.log(names.toString());

// "preet,dhroovi,kashkna,yash"

console.log(names.at(2));
console.log(names[2]);

arr1 = [12, 34, 57, 7, 5];
arr2 = [34, 43, 34, 5, 67, 7, 8, 8];

console.log(arr1.join("=="));

console.log(arr1.concat(arr2)); // joins the 2 array

arr1.shift();

console.log(arr1);

arr2.unshift(99);

console.log(arr2);

delete arr2[5];

console.log(arr2);

data = ["prit", "yuvraj", "yash", "jimit", "krishna", "mohsim"];
// data.copyWithin(3, 0);
console.log(data);

console.log(data.slice(5));
