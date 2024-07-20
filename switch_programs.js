// Day of the Week: Write a JavaScript program that prints the name of the day of the week based on a number input
// (1 for Sunday, 2 for Monday, ..., 7 for Saturday).

let day = 5

switch (day) {

    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");

}

// Month Name: Write a JavaScript program that prints the name of the month based on a number input
// (1 for January, 2 for February, ..., 12 for December).

let month = 66

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
}

// Use a switch statement to determine the season(Winter, Spring, Summer, Fall)

let season = "Winter"

switch (season) {
    case "Winter":
        console.log("Winter");
        break;
    case "Spring":
        console.log("Spring");
        break;
    case "Summer":
        console.log("Summer");
        break;
    case "Fall":
        console.log("Fall");
        break;
    default:
        console.log("Invalid season");
        
}

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

