// Arrays

var countries = ['India', 'USA', 'Uk']

// arrays are mutable i.e
countries[1] = "America"

// note that string are immutable i.e
console.log("America"[1]  = "a")
// throws an error

// array iteration

// Normal
for (var i = 0; i < countries.length; i++) {
  console.log(countries[i])
}

//we can also iterate arrays as

for (country of countries){
  alert(country)
}

// that also can be done as

countries.forEach(alert)


// You can also pass in your own function ie
stack = ["Django", 'Python']
function awe(name){
  alert(name+" is awesome")
}

stack.forEach(awe)

// Arrays can take different data types unlike in c or Java

array =[1, 'one', true]
