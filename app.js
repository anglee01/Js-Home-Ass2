//Chapter 6 (Math Expression II)
//q1
var x=++x;
//q2
var x= 100;
var y= --x;
console.log(y);
//q3
console.log("The vale of y is 50");
//q4
console.log("The value z is 51");
//q5
var num= 40;
var newNum= --num;
console.log("The new value is"+" "+newNum);
//q6
var num1= 60;
var num2= ++num1;
console.log("The new value is"+" "+num2)
//q7
var number=90;
var newNum= ++number;
alert("the new value is" +" "+ newNum);

//chapter7
//q1
console.log("The value of calculatedNum is 14");
//q2
console.log("The value of calculatedNum is 24");
//q3
console.log("The value of calculatedNum is 24");
//q4
console.log("The value of the calculatedNum is 18");
//q5
var cost = (2 + 2)* (4 + 10);
console.log("The result is:"+ " "+cost);
//q6
 var unit = 2 + (2 * 4) + 10;
 console.log("The result is:"+ " "+unit);
 //q7
  var pressure = 4 / (2 * 4);
  console.log("The result is:"+ " "+pressure);

  //Chapter 8 (Concatenating Text Strings)
   //q1
  console.log("The value of num is: 22");
  //q2
  console.log("The value of num is: Hello Dory");
  //q3
  alert("33" + 3);
  //q4
  alert("Pakistan"+" "+"Zindabad");

  //q5
 var y= "77"+9;
 console.log(y);
  //q6
  var value_1="43";
  var value_2= "87";
  var finalValue= value_1+value_2;
  console.log("THE VALUE AFTER CONCATENATION IS:"+" "+finalValue);

 // Chapter 9 (Prompts)
 //q1
var firstName=prompt("Enter first name");
console.log(firstName);
//q2
var info ="country?";
var default_answer= "China";
var country= prompt(info, default_answer);
console.log(country);
//q3
var yourName = prompt("Enter Your Name");
console.log(yourName);
//q4
var userName=prompt("PLEASE ENTER YOUR NAME:", "ANGEL");

//q5
var a ="enter your response if you are 18+";
var b= "Yes/ NO";
var c= prompt(a,b);
//q6

//Chapter 10 (if statments)
//q1
 var city = "Karachi";
if (city = "Karachi")
 {
console.log("The City OF Lights")
 }
 //q3
  var ZipCode= "10010";  
  if(ZipCode== "10010") 
  {
    alert("karachi");
  }
  else{
    alert("Please write correct city");
  }

  //q4
  var x=2;
  if(x==2)
  {
     x=1
    console.log(x);
  }


 // Chapter 11 (Comparison Operators)
 //q1 
 var a= 6;
 var b=9;
 if(a!=b){
    console.log("Value not same");
 }
 else{
    console.log("Same value");
 }

//q2
var value1=7;
var value2=10;
if(value1 >=value2)
{
    console.log(value1+" "+ "is"+" "+"greater than" +" "+ value2);
}
else{
    console.log(value2+" "+"is"+" "+"greater than"+" "+value1);
}

//q3
var c=4;
if(c!=6)
{
c=6;
console.log("The new value of c"+"  "+"is" +" "+ c);
}
else{
    console.log("The value is equal");
}
//q4
var num= 8;
if(8!=7){
    alert("Congratulations");
}
//q5
var first_Name= prompt("Enter the first name");
if(first_Name!="john"){
    alert("No match!");
}
else{
    alert("Match found");
}
                                                //The End