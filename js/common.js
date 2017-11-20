window.onload=function() {
	 	   function soundClick() {
             var audio = new Audio(); 
             audio.src = 'click.mp3';
             audio.autoplay = true; 
             }
       	

	document.getElementById('case').onclick = function() {
		 if (confirm('Вы согласны, что с Вашего счёта будет списан (+)?')) {
       	soundClick(); 
		setTimeout(show, 5000);
		function show(){
			$("#close1").css("display", "none");
			$("#open1").css("display", "block");
				function randomInteger() {
		    var rand = Math.random() * 100;
		    rand = Math.round(rand);
		    return rand;
		 }	
		 percent = randomInteger();
		 if      ( percent >= 0 && percent < 21 ) {
		 	$('#gun').remove();
		 	var img = document.createElement("IMG");
img.src = "img/433261347f61.png";
img.id= "gun";
document.getElementById ('case').appendChild (img);
		 }       
		else if ( percent >= 21 && percent < 56 )     {
			$('#gun').remove();
			var img = document.createElement("IMG");
img.src = "img/11.png";
img.id= "gun";
document.getElementById ('case').appendChild (img);
		}   
		else if ( percent >= 56 && percent <= 100 )  {
			$('#gun').remove();
			var img = document.createElement("IMG");
img.src = "img/ar.png";
img.id= "gun";
document.getElementById ('case').appendChild (img);
		}    
	}
	}
	}
	document.getElementById('case2').onclick = function() {
		 if (confirm('Вы согласны, что с Вашего счёта будет списан (+)?')) {
		setTimeout(show, 5000);
		soundClick();
		function show(){
			$("#close2").css("display", "none");
			$("#open2").css("display", "block");
		function randomInteger() {
		    var rand =  Math.random() * 100;
		    rand = Math.round(rand);
		    return rand;
		 }
		 percent = randomInteger();
		 if      ( percent >= 0 && percent < 21 ) {
		 	$('#gun2').remove();
		 	var img = document.createElement("IMG");
img.src = "img/433261347f61.png";
img.id= "gun2";
document.getElementById ('case2').appendChild (img);
		 }       
		else if ( percent >= 21 && percent < 56 )     {
			$('#gun2').remove();
			var img = document.createElement("IMG");
img.src = "img/11.png";
img.id= "gun2";
document.getElementById ('case2').appendChild (img);
		}   
		else if ( percent >= 56 && percent <= 100 )  {
			$('#gun2').remove();
			var img = document.createElement("IMG");
img.src = "img/ar.png";
img.id= "gun2";
document.getElementById ('case2').appendChild (img);
		 } 
	  }   
	  }
	}

	document.getElementById('case3').onclick = function() {
		 if (confirm('Вы согласны, что с Вашего счёта будет списан (+)?')) {
       	soundClick(); 
		setTimeout(show, 5000);
		function show(){
			$("#close3").css("display", "none");
			$("#open3").css("display", "block");
				function randomInteger() {
		    var rand = Math.random() * 100;
		    rand = Math.round(rand);
		    return rand;
		 }	
		 percent = randomInteger();
		 if      ( percent >= 0 && percent < 21 ) {
		 	$('#gun3').remove();
		 	var img = document.createElement("IMG");
img.src = "img/433261347f61.png";
img.id= "gun3";
document.getElementById ('case3').appendChild (img);
		 }       
		else if ( percent >= 21 && percent < 56 )     {
			$('#gun3').remove();
			var img = document.createElement("IMG");
img.src = "img/11.png";
img.id= "gun3";
document.getElementById ('case3').appendChild (img);
		}   
		else if ( percent >= 56 && percent <= 100 )  {
			$('#gun3').remove();
			var img = document.createElement("IMG");
img.src = "img/ar.png";
img.id= "gun3";
document.getElementById ('case3').appendChild (img);
		}    
	}
	}
	}

}