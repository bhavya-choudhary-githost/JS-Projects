const inc = document.getElementById("incbtn")
const dec = document.getElementById("decbtn")
const val = document.getElementById("Countlabel")
let step = 1;
let count = 0;

val.onclick = function(){
    step = parseInt(prompt("Enter step value:", 1))
}

inc.onclick = function(){
    count += step;
    val.textContent=count;
}

dec.onclick = function(){
    if (count > step -1){
    count -= step;
    val.textContent=count;
    }
}