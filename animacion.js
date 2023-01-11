document.addEventListener("DOMContentLoaded", function() { 
    var btn = document.getElementById("myBtn");
    var div = document.getElementById("myDiv");
    var animationOn = false;
  
    btn.addEventListener("click", function() {
      if (!animationOn) {
        div.classList.add("vibracion");
        animationOn = true;
        
      } else {
        div.classList.remove("vibracion");
        animationOn = false;
      }
    });

    

  });