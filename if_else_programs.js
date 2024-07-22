//Temperature Check: Write a JavaScript program that checks the temperature and prints a message based on the following conditions:

//If the temperature is below 0, print "Freezing weather."
//If the temperature is between 0 and 10, print "Very Cold weather."
//If the temperature is between 10 and 20, print "Cold weather."
//If the temperature is between 20 and 30, print "Normal weather."
//If the temperature is between 30 and 40, print "Hot weather."
//If the temperature is above 40, print "Very Hot weather."

let temp = 6;

if (temp <= 0) {
  console.log("Freezing weather.");
} else if (temp <= 10 && temp > 0) {
  console.log("Very Cold weather");
} else if (temp <= 20 && temp > 10) {
  console.log("Normal weather.");
} else if (temp <= 30 && temp > 20) {
  console.log("Very Cold weather");
} else if (temp <= 40 && temp > 30) {
  console.log("Hot weather.");
} else if(temp>40) {
  console.log("Very Hot weather.");
}

//Grade Checker: Write a JavaScript program that checks a student's grade and prints the 
// corresponding letter grade based on the following conditions:

//If the grade is 90 or above, print "A."
//If the grade is between 80 and 89, print "B."
//If the grade is between 70 and 79, print "C."
//If the grade is between 60 and 69, print "D."
//If the grade is below 60, print "F."

//Even or Odd: Write a JavaScript program that checks if a number is even or odd and prints the 
//corresponding message.

let num = 13;

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//Leap Year Check: Write a JavaScript program that checks if a year is a leap year or not.

let year = 2025

if (year % 4 == 0) {
    console.log("Is Leap");
} else {
    console.log("Not Leap");
}

//Age Category: Write a JavaScript program that categorizes a person based on their age:
//If the age is below 13, print "Child."
//If the age is between 13 and 19, print "Teenager."
//If the age is between 20 and 59, print "Adult."
//If the age is 60 or above, print "Senior."
