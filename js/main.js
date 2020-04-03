function navSwitch() {
    let x = document.getElementById("myTopNav");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
function valuteSwitch(){
    let el = document.getElementsByClassName("valute-card");
    for(let i = 4; i <= el.length; i++){
      if(el[i].style.display=== "flex"){
        document.querySelector(".valute-btn").style.transform = "rotate(0deg)";
        el[i].style.display = "none";
      }else{
        el[i].style.display = "flex";
        document.querySelector(".valute-btn").style.transform = "rotate(180deg)";
      }
      
    }
        
}
  