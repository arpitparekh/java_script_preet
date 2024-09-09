async function timeLagega() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Bonjor')
    }, 3000)
  })
}

// to do sequntial background task we use async and await

async function display() {

console.log('Hello');

console.log(await timeLagega());  // background

console.log('Bye');

}

display()
