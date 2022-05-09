/*P1.Will alert be shown?

if ("0") {
  alert( 'Hello' ); //Yes - Output->Hello
} 


P2.Using if..else, write the code which gets a number via prompt and then shows in alert:
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
let numb=Number(prompt("Enter the number : "))

if (numb>0){
    alert(1);
}
else if (numb<0){
    alert(-1);
}
else {
    alert(0);
}
console.log(numb) */


/*P3.create a grade caluclator app with your own assumptions.
let sub1=Number(prompt("Enter the marks in subject1."))
let sub2=Number(prompt("Enter the marks in subject2."))
let sub3=Number(prompt("Enter the marks in subject3."))
let sub4=Number(prompt("Enter the marks in subject4."))
let avg=(sub1+sub2+sub3+sub4)/4

if (avg>85){
    alert("You have got Distinction")
}
else if(avg>70 || avg<85){
    alert("You have got First Class")
}
else if(avg>60 || avg<70){
    alert("You have got Second Class")
}
else{
    alert("You have not cleared")
}*/


/*P4.Rewrite this if using the conditional operator '?':
let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let a=Number(prompt("Enter first value"))
let b=Number(prompt("Enter second value"))
let result=(a+b < 4)?'Below':'Over'
console.log(result)*/


/*P4.Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
}  else {
  message = '';
}

let message=(login=="Employee")?'Hello':''*/


/*P5.Write the code using if..else which would correspond to the following switch:
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;
  default:
    alert( 'We hope that this page looks ok!' );
}

let browser=prompt("Enter the browser name")
if (browser=="Edge") {
    console.log("You've got the Edge")
}
else if (browser=="Chrome" || browser=="Firefox" || browser=="Safari" || browser=="Opera"){
    console.log("Okay we support these browsers as well")
}
else{
    console.log('We hope that this page looks ok!')
}*/


/*P6.looping statements print numbers divisible by 5 and 3 in the range 0 to 100*/

/*let i=0

//Using While loop
while (i<101) {
    if (i%5==0 && i%3==0){
        console.log(`${i} is divisible by 3 and 5`)
    }
    i=i+1
}

//Using For loop
/*for (i=0;i<=100;i++){
    if (i%5==0 && i%3==0){
        console.log(`${i} is divisible by 3 and 5`)
    }
}*/

