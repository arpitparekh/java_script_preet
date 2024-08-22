// object datatype
// key value

let a = 12

let obj = {
  name: "preet",
  age: 21
}

console.log(obj);
console.log(obj.name);
console.log(obj.age);

obj.name = "preet student"  // modify the value of the object
console.log(obj);

delete obj.age

console.log(obj);

obj['address'] = "vastrapur"  // add value to an object

console.log(obj);

for (key in obj) {
  console.log(obj[key]);
}

// nested object

institute = {
  name: "bascom",
  address: "vastrapur",
  student: {
    name: "preet",
    age : 20
  }
}

console.log(institute);
console.log(institute.name);
console.log(institute.address);
console.log(institute.student.name);
console.log(institute.student.age);
