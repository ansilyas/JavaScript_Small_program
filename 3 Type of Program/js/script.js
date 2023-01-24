/*
//Program.1;
let runagain=true;

//This is how we Create a Function;
const canDrive = (age) => {
    return age >= 18 ? true : false
}

// Using Loop to Run the Program again;
 while(runagain){
    let age = prompt("Enter your age");
age = Number.parseInt(age);

// this is use to show error;
if(age<0){
    console.error("please enter a valid age");
}

if (canDrive(age)) {
    alert("yes you can drive");
}
else {
    alert("You cannot Drive");
}
runagain=confirm("Do you want to play again?");
}
*/
// ---------------------------------------------------------

// Program.2, To go to the (Google) page:
    let number = prompt("Enter your number");
number = Number.parseInt(number);

if(number>4){
    location.href="https://google.com"
}

// Program.3,Change background color;
//Change color using javascript;
let color=prompt("Enter the page background color")
document.body.style.background=color;


