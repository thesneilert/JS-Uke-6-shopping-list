// ----- MODEL -----

const app = document.getElementById("app"); //henter div med id "app"

let inputValue = ''
let handleliste = ['Melk', 'Bakepulver', 'Kakao', 'Egg', 'Smør']


// ----- VIEW -----

show();
function show() {
    let html = '';

    for (let i = 0; i < handleliste.length; i++) {
        html += `
            <li>
                ${handleliste[i]} 
                <button onclick="changeItem(${i})">Changes</button>
                <button onclick="deleteItem(${i})">x</button>
            </li> `
    }

    html += `<input oninput="inputValue = this.value" type="text"> <button onclick="addItem()">Legg til </button>`;
    document.getElementById("app").innerHTML = html;
}


// ----- CONTROLLER -----

show();
function show() {
    let html = '';

    for (let i = 0; i < handleliste.length; i++) {
        html += `
            <li>
                ${handleliste[i]} 
                <button onclick="changeItem(${i})">Changes</button>
                <button onclick="deleteItem(${i})">x</button>
            </li> `
    }

    html += `<input oninput="inputValue = this.value" type="text"> <button onclick="addItem()">Legg til </button>`;
    document.getElementById("app").innerHTML = html;
}
