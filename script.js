function cleardisplay(){
document.getElementById("display-bar").innerHTML = "";
    }
    
function display(userInput){
    document.getElementById("display-bar").innerHTML += userInput;
}    

function calculator(){
    var answer = eval(document.getElementById("display-bar").innerHTML); // You are trying to get us in jail and be terriable people 
    document.getElementById("display-bar").innerHTML = answer;
    
}