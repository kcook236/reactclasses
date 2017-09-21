class Factory {
  constructor() {
    this.make = "Mazda"
    this.location = "USA"
    this.airbags = true
    this.abs = true
    this.warranty = "60,000 miles / 3 years"
    this.massbuild = this.massbuild.bind(this)
    this.customerBuild = this.customerBuild.bind(this)
  }
  massbuild(quantity, options) {
    this.quantity = quantity
    this.options = options
    console.log("Building " + quantity + " " + this.color + " " + this.trim + " " + this.model + " " + options)
  }
  customerBuild(color, options) {
    this.color = color
    this.options = options
    console.log("Building one " + color + " " +this.trim + " " + this.model + " with the following options: " + options)
  }
}

const factory = new Factory()
console.log(factory)
console.log(factory.customerBuild("red"))

class Car extends Factory {
  constructor(model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof, warranty) {
    super(warranty)
    this.model = model
    this.doors = doors
    this.color = color
    this.enginetype = enginetype
    this.transmission = transmission
    this.trim = trim
    this.wheelstrim = wheelstrim
    this.audio = audio
    this.seatstrim = seatstrim
    this.moonroof = moonroof
    this.enginsize = 4
    this.navigation = true
    this.backupcamera = true
    this.warranty = "100,000 miles / 5 years"
  }
}



class Sport extends Car {
  constructor(model, trim, transmission, top, color, seatstrim, audio, wheelstrim, moonroof, enginetype, convertible, doors) {
    super(moonroof, enginetype, doors)
    this.model = model
    this.trim = trim
    this.transmission = transmission
    this.top = top
    this.color = color
    this.seatstrim = seatstrim
    this.audio = audio
    this.wheelstrim = wheelstrim
    this.moonroof = false
    this.enginetype = "gasoline"
    this.convertible= true
    this.doors = 2
  }
}
//console.log(Sports)

class Truck extends Factory {
  constructor(model, color, trim, enginesize, hitch, bed, navigation, backupcamera, audio, warranty) {
    super(backupcamera, audio, warranty)
    this.model = model
    this.color = color
    this.trim = trim
    this.enginesize = enginesize
    this.hitch = hitch
    this.bed = bed
    this.navigation = navigation
    this.backupcamera = true
    this.audio= "basic"
    this.warranty = "150,000 miles / 6 years"
  }
}
console.log(Truck)

let mazda3 = new Car("mazda3", 4, "red", "hybrid", "automatic", "touring", "base", "premium", "leather", true)
//constructor(model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof, warranty) {
//model (mazda3), color (red), enginetype (hybrid), transmission (automatic), trim (touring), wheels (base), audio (premium), seats (leather), and moonroof (true)

console.log(mazda3)
console.log(mazda3.massbuild(3500, ""))
console.log(mazda3.customerBuild("yellow", "weather package, satillite radio, rear spoiler"))

//console.log(mazda3.massBuild(35000, "red", "touring", "Mazda3"))

let miataRf = new Sport("Miata-RF", "Grand Touring", "manual", "hard top", "red", "leather", "premium", "premium")
//constructor                (model, trim, transmission, top, color, seatstrim, audio, wheelstrim, moonroof, enginetype, convertible, doors) {
console.log(miataRf)
console.log(miataRf.massbuild(15000, ""))
console.log(miataRf.customerBuild("black", "hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"))

let trailBlazer = new Truck("Trail Blazer", "Blue", "Sport", 8, true, "standard", true, 2)
//  constructor(model, color, trim, enginesize, hitch, bed, navigation, backupcamera, audio, warranty) {
//model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

console.log(trailBlazer)
console.log(trailBlazer.massbuild(3500, ""))
console.log(trailBlazer.customerBuild("red", "seat warmers, tinted, windows, fog lamps"))
