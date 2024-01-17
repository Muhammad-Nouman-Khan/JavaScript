const URL = "https://v6.exchangerate-api.com/v6/694ba6cc9d731aef278e6682/latest/USD";
const API = "694ba6cc9d731aef278e6682";

let dropdown = document.querySelectorAll(".country select");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg p");
let btn = document.querySelector("button");


for (let select of dropdown) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    const flag = countryList[element.value];
    let newSrc = `https://flagsapi.com/${flag}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}

const updateExchangeRate = async () => {

    let amount = document.querySelector(".main input");

    let amountVal = amount.value;

    if (amountVal === "" || amountVal < 1) {
        amountVal = 1;
        amount.value = 1;
    }

    const newURL = `https://v6.exchangerate-api.com/v6/694ba6cc9d731aef278e6682/latest/${fromCurr.value}`;

    let response = await fetch(newURL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value];
    let finalAmount = amountVal * rate;
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

btn.addEventListener("click", () => {
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
})

