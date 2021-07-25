// Question no 1
 var itemsArray = [
     { name:"juice",price:"50",quantity:"3"},
     { name:"cookie",price:"30",quantity:"9"},
     { name:"shirt",price:"880",quantity:"1"},
     { name:"pen",price:"100",quantity:"2"},
 ];
 console.log(itemsArray[0].price* itemsArray[0].quantity)
 console.log(itemsArray[1].price * itemsArray[1].quantity)
 console.log(itemsArray[2].price * itemsArray[2].quantity)
 console.log(itemsArray[3].price * itemsArray[3].quantity)
//QUESTION NO 2\
const item ={
     Name:"ahsan",
     email:"ahsan444khan@gmail.com",
     password:"1111",
     age:"19",
     gender:"male",
     city:"Karachi",
     Country:"Pakistan", };
     
if ("name" in item === true) {
            console.log(" yes")
    }
    else{console.log("nothing")}
    if ("email" in item === true) {console.log ("u are") }
    else { console.log("u win ")} 

    // Question no 3


function Person () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.name);

//QUESTION NO 4
function Person(first, last, age,gender,profession,address) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
    this.profession = profession;
    this.address = address;
  }
