// Traffic Light:
// Write a JavaScript program that prints a message based
// on the color of a traffic light(Red, Yellow, Green).

let value = "red"

switch (value) {
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("Slow down")
        break;
    case "green":
        console.log("Go")
        break;
    default:
        console.log("Invalid")
}

// Fruit Price: Write a JavaScript program that prints the price of a fruit based on its name
// (Apple, Banana, Orange, etc.). Use a switch statement to handle different fruits.

let fruit = "apple"

switch (fruit) {
    case "apple":
        console.log("1.25")
        break;
    case "banana":
        console.log("2.00")
        break;
    case "orange":
        console.log("1.80")
        break;
    default:
        console.log("Invalid")
}