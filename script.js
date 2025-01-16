var disp = document.getElementById("display")

function show(input)
{
    disp.value += input;
}
function cal(){
    disp.value=eval(disp.value)
}
function clearall()
{
    disp.value =""
}
function del()
{
    disp.value =disp.value.slice(0,-1)
}
