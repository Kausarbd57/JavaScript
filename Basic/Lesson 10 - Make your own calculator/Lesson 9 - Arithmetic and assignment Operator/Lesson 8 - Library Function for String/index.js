/*
var num1=20;
var num2=10;
var sum,sub;

sum=num1+num2;
sub=num1-num2;

document.write("sum = "+sum);
document.write("<br>Sub = "+sub);
*/

/*
var num1=prompt("Enter Your Fist Number: ")
var num2=prompt("Enter Your Second Number: ")

num1=parseInt(num1);
num2=parseInt(num2);
var sum,sub;

sum=num1+num2;
document.write("sum = "+sum);

sub=num1-num2; 
document.write("<br>Sub = "+sub);
*/

//------------------------------
//Task 3: 
//Enter First Number : 20
//Enter second Number : 10
// strucure like 
//  20+10=30
// 20-10=10
//  20*10=200
// 20/10=2
//20%10=0
//----------------------

num1=prompt("Enter Your First Number : ");
num1=parseInt(num1);

num2=prompt("Enter Your Second number : ");
num2=parseInt(num2);

var sub,sum,div,multi,modulas;


sum=num1+num2;
document.write("<br>"+num1+ " + " +num2+ " = " +sum);

sub=num1-num2;
document.write("<br>"+num1+ " - " +num2+ " = " +sub);

multi=num1*num2;
document.write("<br>"+num1+ " * " +num2+ " = " +multi);

div=num1/num2;
document.write("<br>"+num1+ " / " +num2+ " = " +div);

modulas=num1%num2;
document.write("<br>"+num1+ " % " +num2+ " = " +modulas);