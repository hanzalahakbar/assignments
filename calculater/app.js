function percentage(value){
    var dis=document.getElementById("zero")
    if (dis.innerText==="0") {
        dis.innerText=value;
        
    }
    else{
        dis.innerText+= value;
    }
   
   
        
    }
function equal() {
    var dis=document.getElementById("zero");
    dis.innerText=eval(dis.innerText)
        
    }
    function clearScreen(){
        document.getElementById("zero").innerText="0"
    }

    
    

