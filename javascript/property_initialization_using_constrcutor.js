class Movies{
  constructor(name,rating,category) {
    this.name = name
    this.rating = rating
    this.category = category
  }

  display() {
    console.log(this.name, this.rating, this.category)
  }

}


// 3. constructor
// constrcutor is a typr of function
// constructor name a class name is same
// constructor is used to initialize the object
// constructor is called automatically when the object is created


let m1 = new Movies("RRR", 8.8, "Action")
m1.display()

let m2 = new Movies("Bahubali", 9.2, "Action")
m2.display()

