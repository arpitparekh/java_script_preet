let a = 12

// conditions
// conditions will manage the flow of the program

// if else

if (a < 10) {
    console.log("a is less than 10")   
} else {
    console.log("a is greater than 10")
}

// if else else if

let num = -34

if (num < 0) {
    console.log("num is negative")
} else if (num > 0) {
    console.log("num is positive")
} else {
    console.log("num is zero")
}

let marks = 59

if (marks >= 90 && marks <= 100) {
    console.log("A+")
} else if (marks >= 60 && marks < 90) {
    console.log("B+")
} else if (marks >= 40 && marks < 60) {
    console.log("C+")
} else {
    console.log("F")
}

/////////////////////////////////////////
// switch

let value = 40

switch (value) {
    case 10:
        console.log("value is 10")
        break
    case 40:
        console.log("value is 40")
        break
    case 30:
        console.log("value is 30")
        break
    default:
        console.log("value is not 10, 40 or 30")
        break
}

// Traffic Light: Write a JavaScript program that prints a message based on the
// color of a traffic light(Red, Yellow, Green).

let light = "Red"

switch (light) {
    case "Red":
        console.log("Stop")
        break
    case "Yellow":
        console.log("Slow down")
        break
    case "Green":
        console.log("Go")
        break
    
}

