// ----- MODEL -----

const app = document.getElementById("app"); //henter div med id "app"

let inputValue = ''
let handleliste = ['Brød']

// ----- VIEW -----

show();
function show() {
    let html = '';

    for (let i = 0; i < handleliste.length; i++) {
        html += `
            <li>
                ${handleliste[i]} 
                <button onclick="changeItem(${i})">Endre</button>
                <button onclick="deleteItem(${i})">x</button>
            </li> `
    }

    html += `<br><input oninput="inputValue = this.value" type="text"> <button onclick="addItem()">Legg til </button>`;
    document.getElementById("app").innerHTML = html;
}


// ----- CONTROLLER -----

function addItem() {
    handleliste.push(inputValue);
    inputValue = "";
    show();
}

function deleteItem(index) {
    handleliste.splice(index, 1);
    show();
}
function changeItem(index) {
    handleliste[index] = inputValue;
    show();
}