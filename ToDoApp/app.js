
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    const RR = document.createElement("h2");
    RR.innerHTML = inputValue;
    
    document.getElementById("Raghad").appendChild(RR) ;

}