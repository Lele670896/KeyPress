canvas = document.getElementByld('myCanvas');
ctx = Canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

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

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))

		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	{
    aplhabetkey();
    document.getElementById("d1").innerHTML="Você precionou uma tecla alfabeto";
    console.log
    }
}

function aplhabetkey()
{ 
    img_image="alfabeto.png.url";
    add();
}
function numberkey()
{
    img_image="número.png.url";
    add();
}
function arrowkey()
{
    img_image="direcional.png.url";
    add();
}
function specialkey()
{
    img_image="especial.png.url";
    add();
}
function otherkey()
{
	img_image="outras.png";
	add();
}