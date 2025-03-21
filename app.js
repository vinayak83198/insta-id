 var istatus = document.querySelector("h5")

 var add = document.querySelector("#add")

var check = 0;

 add.addEventListener("click" , function(){

  if(check == 0){
 istatus.innerHTML  = "Friends"
  istatus.style.color = "green"
  add.innerHTML = "Remove friend"
  check = 1
  }else{
    istatus.innerHTML  = "Stranger"
  istatus.style.color = "red"

  check = 0
  }
 
 })

 