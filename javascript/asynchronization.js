// asyncronization in java script
// to do something in a background

function doSomethingInBack() {
  setTimeout(function () {
    console.log('I am doing something in background');
  }, 3000);
}

function someThing() {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // 12
      resolve('Bonjor');
    }, 3000);
  });

  return p;
}

function someThingElse() {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // 12
      resolve('Hola');
    }, 4000);
  });

  return p;
}

// time consuming process
// api call
// http request
// file read
// database operation

// doSomethingInBack();  // callback

console.log('Hello');

someThing().then(function (data) {  // 3
  console.log(data)

   someThingElse().then(function (data) {
     // 4
     console.log(data);
   });

})

//  someThingElse().then(function (data) {
//    // 4
//    console.log(data);
//  });

console.log('Bye');

/////////////////////////////////////////////////////////////////////
// Promise (class)  // put whole setTime function into promise object


