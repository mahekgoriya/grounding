var defaultValue="hello";
var fullname=prompt("what is your full name");
console.log(defaultValue);
console.log(fullname,typeof fullname);
alert(fullname);
var reply=confirm("Are you sure");
if(reply===true) {
    alert("you agreed");
}
else{
    alert("you declined");
}

var adress=prompt("Enter your adress", defaultValue);
var city="india"+" "+prompt("enter your city", defaultValue);

console.log(adress, typeof adress);
console.log(city, typeof city);