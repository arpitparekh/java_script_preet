// oopc concepts
// object oriented programming concepts
// we can devide the whole code into class

// 1. class
// is a blurprint
// class is colelction of variables(properties) and methods(member function)

class Student {
  // blueprint

  st_name = '';
  st_age = 0;
  st_marks = 0;

  display() {
    console.log('Display Function');
  }
}

// 2. object
// object is used to to access properties and functions of a class
// object can be created using new keyword

let s1 = new Student();  // data container

s1.st_name = 'Preet';
s1.st_marks = 45;
s1.st_age = 20;

console.log(s1.st_age);
console.log(s1.st_name);
console.log(s1.st_marks);

s1.display();

let s2 = new Student();
s2.st_name = 'Maulik';
s2.st_marks = 45;
s2.st_age = 27;
console.log(s2.st_age);
console.log(s2.st_name);
console.log(s2.st_marks);

s2.display();
