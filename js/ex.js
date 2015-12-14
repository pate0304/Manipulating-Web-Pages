var left;
var right;
var a;
window.onload = function () {
 // alert("Page is loaded");
	left = document.querySelector(".long-rect");
	right = document.querySelector(".short-rect");
	
	left.addEventListener("mouseover", function () {
    a=true;
		right.innerText = "Mouse Over on left box";
    
   right.addEventListener("click", function () {
      if(a === true){
			alert("Click!");
	a=false;
      }
      });
    });
	
  left.addEventListener("mouseout", function () {
		right.innerText = "Mouse is now outside";
	});
 
 };

  
                           