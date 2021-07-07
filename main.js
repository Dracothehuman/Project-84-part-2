canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image = "Alpkey.png";

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey();
			document.getElementById("d1").innerHTML="Alphatbet key has been pressed";
			console.log("alphabeato");
	    }

	   
	    else if(keyPressed >=48 && keyPressed<=57)
		{
			numberkey();
			document.getElementById("d1").innerHTML="Number key has been pressed";
			console.log("numbera");
	    }
	   
	    else if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey();
			document.getElementById("d1").innerHTML="Arrow key has been clicked";
			console.log("arrata");
	    }

	    
	    else if(keyPressed >=17 && keyPressed<=28)
		{
			specialkey();
			document.getElementById("d1").innerHTML="Special key has been clicked";
			console.log("specialolo");
		}
	    else{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
	    }
}



function alphabetkey()
{
	img_image="Alpkey.pnf";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
	
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
