var array = ['Volkswagen', 'BMW', "Porsche", "Mercedes", "Honda"];
const elem = document.querySelector("#itemList");

function displayItems(){
    elem.innerHTML = "";
    var newInner = '';
    for (item of array){
        console.log(item);
        newInner+= `<li>${item}</li>`;
    }

    elem.innerHTML = newInner;
}






displayItems();