var value = 0;

function update(){
    var color = ""

    if(value > 0){
        color = "#4CAF50"

    }else if(value < 0){
        color = "#f44336"

    }else {
        color = "#666"

    }
    document.querySelector("#counter").style.color = color;
    document.querySelector("#counter").textContent = value;
}
function increment(){
    value++;
    update();
}
function decrement(){
    value--;
    update();
}
function reset(){
    value = 0;
    update();
}
