
//------------Square---------------
base=prompt("Square Base");
base=parseFloat(base);

height=prompt("Square Height");
height=parseFloat(height);

var Square=base*height;
document.write("<br>Square Area: "+Square);

//----------Rectangle-----------------------------

base=prompt(" Rectangle Base");
base=parseFloat(base);

height=prompt("Rectangle Height");
height=parseFloat(height);

var Rectangle=base*height;
document.write("<br>Rectangle Area: "+Rectangle);


//---------Triangle------------------------------

base=prompt(" Triangle Base");
base=parseFloat(base);

height=prompt("Triangle Height");
height=parseFloat(height);

var Triangle=(base*height)/2;
document.write("<br>Triangle Area: "+Triangle);

//------------Trapezium---------------------------

height=prompt("Trapezium Height");
height=parseFloat(height);

a=prompt(" Trapezium Value A :");
a=parseFloat(a);

b=prompt(" Trapezium Value b :");
b=parseFloat(b);

var Trapezium =(height*(a+b))/2;
document.write("<br>Trapezium  Area: "+Trapezium );


//----------Parallelogram-------------

base=prompt("Parallelogram Base");
base=parseFloat(base);

height=prompt("Parallelogram Height");
height=parseFloat(height);

var Parallelogram=base*height;
document.write("<br>Parallelogram Area: "+Parallelogram);
