const value= document.getElementById("textbox");
const CtoF= document.getElementById("CtoF");
const FtoC= document.getElementById("FtoC");
const result= document.getElementById("result");
let temp;


function convt(){
    if(CtoF.checked){
        temp = Number(value.value);
        temp = (9/5)*temp + 32
        result.textContent = `Result is ${temp.toFixed(1)} °F`;
    }

    else if(FtoC.checked){
        temp = Number(value.value);
        temp = (5/9)*(temp-32)
        result.textContent = `Result is ${temp.toFixed(1)} °C`;
    }

    else{
        result.textContent = "Please Select Units";
    }
}
