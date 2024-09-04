// async function is a function that can be paused and resumed

function abc() {
  return "Hello"
}

async function callingServer() {
  return "Hello"
}

console.log(abc());

callingServer().then()

console.log("Hello World");
