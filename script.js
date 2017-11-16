var numsquares = 6;
var colors = generaterandomColors(numsquares);

	var squares = document.querySelectorAll(".square");
	
	
	var pickedcolor = pickColor();
	var colourDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetbutton = document.querySelector("#reset");
	var easyBtn = document.querySelector("#easyBtn");

	var hardBtn = document.querySelector("#hardBtn");
	

	easyBtn.addEventListener("click",function(){
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
		numsquares = 2;	
		colors = generaterandomColors(numsquares);
		pickedcolor = pickColor();
		colorDisplay.textContent = pickedcolor;
		for(var i = 0;i < squares.length;i++)
		{
			if(colors[i])
			{
				squares[i].style.backgroundColor = colors[i];
			}
			else
			{
				squares[i].style.display = "none";
			}
		}
	});


	hardBtn.addEventListener("click",function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		numsquares = 6;
		colors = generaterandomColors(numsquares);
		pickedcolor = pickColor();
		colorDisplay.textContent = pickedcolor;
		for(var i = 0;i < squares.length;i++)
		{
			
			
				squares[i].style.backgroundColor = colors[i];
			
			
			
				squares[i].style.display = "block ";
			
		}
	});

	resetbutton.addEventListener("click",function(){

		colors = generaterandomColors(numsquares);
		pickedcolor = pickColor();
		colorDisplay.textContent = pickedcolor;
		this.textContent = "New colors";

		messageDisplay.textContent = "";
		for(var i = 0;i < squares.length;i++)
		{
			squares[i].style.backgroundColor = colors[i];
		}

		h1.style.backgroundColor = "steelblue";
	});
	colourDisplay.textContent = pickedcolor;
	for(var i = 0;i < squares.length;i++)
	{
		// add initial color
		squares[i].style.backgroundColor = colors[i];
		// add event andler
		squares[i].addEventListener("click",function(){

			var clickedcolor = this.style.backgroundColor;
			console.log(pickedcolor , clickedcolor);
			if(clickedcolor === pickedcolor)
			{
				messageDisplay.textContent = "Correct";
				resetbutton.textContent = "PLAY AGAIN?";
				changeColor(clickedcolor);
				h1.style.backgroundColor = clickedcolor;

			}
			else
			{
				this.style.backgroundColor = "#232323"; 
				messageDisplay.textContent = "Try again";
			}
		});
	}





	function changeColor(color)
	{
		for(var i = 0;i< squares.length;i++)
		{
			squares[i].style.backgroundColor = color;
		}
	}
	function pickColor()
	{
		var random = Math.floor(Math.random()*colors.length);
		return colors[random];
	}
	function generaterandomColors(num)
	{
		var arr = [];
		for(var i = 0;i <= num;i++)
		{
			arr.push(randomColor());
			//get random colors 

		}
		return arr;
	}
	function randomColor()
	{
		//pick a red from 0-255*6
		var  r = Math.floor(Math.random()*256);
		var  g = Math.floor(Math.random()*256);
		var  b = Math.floor(Math.random()*256);
		
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}