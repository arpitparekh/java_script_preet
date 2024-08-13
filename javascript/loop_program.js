// loop program
// print even number between 1 to 100

for (let x = 1; x <= 100; x++) {
  if (x % 2 == 0) {
    console.log(x);
  }
}

// print all the number between 1.1000 which is divisable by 5 and 11

for (let x = 1; x <= 1000; x++) {
  if (x % 5 == 0 && x % 11 == 0) {
    console.log(x);
  }
}

// find factorial of a number

// 4! = 4*3*2*1

let num = 5; // 12*11*10*9*8*7*6*5*4*3*2*1 = ?

let fact = 1; // 121

for (let x = num; x >= 1; x--) {
  // 12 // 11 // 10

  fact = fact * x;
}

console.log(num + " factorial is : " + fact);


// sum of all the numbers between 1..100

sum = 0  // 1 // 3

for (let n = 1; n <= 100; n++){
    sum = sum + n;
}

console.log(sum)

// print fibonacci series
// 0 1 1 2 3 5 8 13....

let n = 5

let a = 0      // 0  // 1  // 1  // 2  // 3  // 5
let b = 1      // 1  // 1  // 2  // 3  // 5  // 8


for (let x = 1; x <= 5; x++) {
    
    console.log(a); // 0
    c = a+b         // 1a
    a = b           // 1
    b = c           // 1
}



