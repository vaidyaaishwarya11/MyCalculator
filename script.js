var a = document.getElementById("txtdisplay"); //Global block
function myclick(e)
{  
     
    a .value = a .value + e.innerHTML;
}
function equal () {
    
    a .value = eval(a .value)
}
function myclear(){
    
    a . value = '';
}
