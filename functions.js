// functions in java script

// functions are the block of code that runs when we call it
// function is a reusable block of code that can be called anytime we want to use it

// function name
// function body

// function return type
// fucntion parameter

function preetKaFunction() {
  // function defination
  console.log("Hello World from preet");
}

// code can be reusable using function

preetKaFunction(); // function call
preetKaFunction(); // function call
preetKaFunction(); // function call  can be done multiple time

//parameter // arguments
// parameter is something that function takes for the outside

function preetSum(a, b) {
  console.log(a + b);
}

preetSum(10, 30);
preetSum(11, 31);
preetSum(20, 50);
preetSum(100, 355);
preetSum(109, 33);

// sum of all the numbers between 1.100

function sumOfRange(n) {
  sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i; // assignment operator
  }

  console.log("sum is", sum);
}

sumOfRange(100);

sumOfRange(50);

sumOfRange(60);

sumOfRange(70);

// return type

// return type is something that my function gives me outside

function kesiHePreet() {
  return "Hello Preet";
}

console.log(kesiHePreet());

function preetKaNumber() {
    return 55;
}

let num = 10 + preetKaNumber()

console.log(num)


function maulikSirKaNumber(a) {
    
    return a * 10

}

console.log(maulikSirKaNumber(10));




