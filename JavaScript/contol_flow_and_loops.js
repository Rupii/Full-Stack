// contol structures

//if
temp = 60
if(temp < 80){
  alert("it is cool out there")
}else if (temp < 90){
  alert("it is normal")
}
else {
  alert("it is super hot out")
}

// switch case
switch (prompt("enter a number") % 2) {
  case 0: alert("it is a even number")
    break;

  default: alert("you have entered a odd number")

}


// loops
//while
var n = 10
while (n > 10) {
  console.log(n*2);
  n++;
}

//for loop
for (var i = 0; i < 20; i++) {
  console.log(i+i);
}
