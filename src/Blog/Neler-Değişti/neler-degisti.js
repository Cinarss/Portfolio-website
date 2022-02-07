let b = "far -fa-sun";
let a = document.getElementById("dark-mode");
a.addEventListener("click", function(e){
  document.getElementsByTagName('body')[0].classList.toggle("dark-mode"); 
  document.querySelector("#dark-mode").classList.toggle('fa-sun')
  e.preventDefault();
  
});


function CopyMe(TextToCopy) {
  var TempText = document.createElement("input");
  TempText.value = TextToCopy;
  document.body.appendChild(TempText);
  TempText.select();
  
  document.execCommand("copy");
  document.body.removeChild(TempText);
  
}



var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

if(w <768 && h >150){
  document.querySelector("#TextToCopy").classList.remove("col-sm-7");
  document.querySelector("#TextToCopy").classList.add("col-xs-7");
  
}else if(w >768 && h >150){
  document.querySelector("#TextToCopy").classList.remove("col-xs-7");
  document.querySelector("#TextToCopy").classList.add("col-sm-7");
  
}
  