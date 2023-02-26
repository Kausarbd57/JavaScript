/*
var text="bangladesh"
var len=text.length;
document.write("Number of charecter: "+len);
*/

/*
var text = prompt("Enter Your Name: ");
document.write("Number of charecter : "+text.length);
*/

/*
var text = prompt("Enter Your Name:  ");
document.write("Number of charecter : "+text.length+"<br>");
document.write(text.charAt(2));
*/

/*
var t1="Bangladesh";
var t2=" is a beutiful country";
document.write(t1.concat(t2));
*/

/*
var t1="Bangladesh";
var text=t1.slice(1,9)
document.write(text);
*/
//--------------------------------------------------
//get first name from user,
// get second name from user.
//add without using library function
//Print full name
//total length of full name
//convert full name into uper case.
//print 2nd position from full name.
var firstName=prompt("Enter Your first name: ");
var lastName=prompt("Enter Your last  name: ");
var fullName=firstName+"\t"+lastName; 
document.write(fullName+"<br>");
var len=fullName.length-1;
document.write(len+"<br>");
fullName=fullName.toUpperCase();
document.write(fullName+"<br>");
fullName=fullName.charAt(1);
document.write(fullName);

//---------------------------------------------------
