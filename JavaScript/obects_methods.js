// Objects

// abjects are similar to Python dictionarires
var carInfo = {
  car : "Tesla",
  make :"2008",
  model :"Sedan"
}
// accessed as
console.log(carInfo["car"])

// you can iterate through abject using for in

for (key in carInfo){
  console.log(key)
}


//Object methods
var person ={
  name : "Rupesh",
  greet : function(){
    alert("Hello "+this.name)
  }
}

// this is kinda a pointer to the variable Similar to this in Java
// methods are executed through .dot operator
person.greet()
