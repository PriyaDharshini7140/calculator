const number=[1,2,3,4,5,6,7,8,9,0];
const operations=["+","-","*","/","="];
getButtons=(val) => {
return `<button type="button" class="btn btn-danger" style="margin: 10px;" id=${val} value=${val}>${val}</button>`;
}
buttons=(val)=>{
    val.forEach((val)=>{
        document.getElementById("calculator").innerHTML += getButtons(val);
    });
};

document.getElementById("calculator").addEventListener("click",Element1=(t)=>{
    if(t.target.value !== "="){
        document.getElementById("inputtext").value += t.target.value;
    }
    else{
        document.getElementById("inputtext").value=eval(document.getElementById("inputtext").value)
    }
})

clearValue= () => {
    document.getElementById("inputtext").value=" "
}
buttons(number);
buttons(operations)
