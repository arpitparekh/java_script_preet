class Car{
  name = ""
  color = ""
  company = ""
  price = 0

  assignPreetValues(name,color,company,price) {
    this.name = name
    this.color = color
    this.company = company
    this.price = price
  }

  displayValues() {
    console.log(this.name,this.color,this.company,this.price)
  }

}

let car = new Car()
car.assignPreetValues("BMW", "Blue", "BMW", 1000000)
car.displayValues()

let car2 = new Car()
car2.assignPreetValues("Audi", "Red", "Audi", 2000000)
car2.displayValues()
