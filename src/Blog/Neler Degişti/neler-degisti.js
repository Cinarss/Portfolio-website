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

