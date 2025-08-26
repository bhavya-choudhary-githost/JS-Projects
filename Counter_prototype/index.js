const inc = document.getElementById("increasebtn")
const dec = document.getElementById("decreasebtn")
const val = document.getElementById("Countlabel")
let count = 0;
let step = 1;

val.onclick = function(){
    step = parseInt(prompt("Enter step value:", 1))
}

inc.onclick = function(){
    count += step;
    val.textContent=count;
}

dec.onclick = function(){
    if (count > step - 1){
    count -= step;
    val.textContent=count;
    }
}