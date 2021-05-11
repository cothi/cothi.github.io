
var style1 = 0;


function sleep(delay) {  
  var start = new Date().getTime();
  while(new Date().getTime() < start + delay);
}

function NavOpenClose() {

  abc = document.querySelector(".arrow");
  id = setInterval(check, 5);
  
  pow = 20;
  set = document.querySelector(".arrow");

  function check() {
    
    if (pow == 100) {
      clearInterval(id);
    } else {
      pow++;
      set.style.top = pow + "px"; 
    }
  }
}
