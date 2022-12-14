const cardholder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.form(document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".cardholder-display");
const numOnCard = document.querySelector(".card-number-display");
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector(".expiry-year-display");
const cvcDisplay = document.querySelector(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSection = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");
const expiryErrorMsg = document.getElementById("expiry-error");



function inputName() {
    nameOnCard.innerHTML = cardholder.value;
    thankYou.innerHTML = `Thank You ${cardholder.value}`;
    if (nameOnCard.innerHTML == "") {
        nameOnCard.innerHTML = cardholder.placeholder;
    }
}

function inputCardNum() {
    let cardNumberImput = cardNumber.value;
    // Do not allow users to write invalid characters
    let formattedCardNumber = cardNumberImput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    // Split the card number is groups of 4 
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join("");
    }
    // if the formmattedCardNumber is different to what is shown, change the 
    if (cardNumberImput !== formattedCardNumber) {
        cardNumber.value = formattedCardNumber; 
    }
    numOnCard.innerHTML = cardNumber.value;
    if (cardNumber.value === "") {
        numOnCard.innerHTML = cardNumber.placeholder;
    }
}


function inputMM () {
    let formattedMM = expiry[0].value;
    formattedMM = formattedMM.substring(0, 2);
    expiry[0].value = formattedMM;
    if (expiry[0].value === "") {
        expMM.innerHTML = "00";
    } else {
        expMM.innerHTML = expiry[0].value;
    }
}

function inputYY () {
    let formattedYY = expiry[1].value;
    formattedYY = formattedYY.substring(0, 4);
    expiry[1].value = formattedYY;
    if (expiry[1].value === "") {
        expYY.innerHTML = expiry[1].value;
    }
}



function inputCvc() {
    let formattedCvc = cvc.value;

    formattedCvc = formattedCvc.substring(0, 3);
    cvc.value = formattedCvc;
    if (cvc.value === "") {
        cvcDisplay.innerHTML = "000";
    } else {
        cvcDisplay.innerHTML = cvc.value;
    }
}

function massValidate() {
    function validateName() {
        let cardholderExp = /^[A-Z a-z]+$/;
        let errorMsg = document.getElementById("errorMsg");
        if (cardholder.value.match(cardholderExp)) {
            errorMsg.textContent = "";
        } else {
            errorMsg.innerHTML = "Please enter cardholder name!";
        }
    }
    function validateCard() {
        let cardNumError = document.getElementById("card-num-error");
        if (cardNumber.value.length > 0 && cardNumber.value.length < 16) {
            
        }
    }
}









