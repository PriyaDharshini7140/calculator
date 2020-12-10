display=(val) => 
{
   document.getElementById("result").value += val
}
solution=() =>
{
    let x= document.getElementById("result").value 
    let y= eval(x)
    document.getElementById("result").value= y
}
clearscreen=() =>{
    document.getElementById("result").value=" "
}
