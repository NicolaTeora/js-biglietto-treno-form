// dichiarazione variabili
let userAge;
let mileage;
let fristPrice;
let discountPrice;
let userName;
const discount20 = 0.2;
const discount40 = 0.4;
const priceKm = 0.21;
const submit = document.getElementById('submit');

//assegnazione
//età passeggero
//chilometri da percorrere
submit.addEventListener('click', function() {

userAge = parseInt(document.getElementById('user-age').value);
console.log(userAge);
mileage = parseInt(document.getElementById('distance').value);
console.log(mileage);
userName = document.getElementById('nameUser');
console.log(userName);

    //prezzo standard
    fristPrice = mileage * priceKm;
    console.log(fristPrice);
    
    document.getElementById('standarPrice').innerText = fristPrice + '€'
    
    //scontistica da applicare al prezzo standard in base all'età
    
    if (userAge < 18) {
        discountPrice = fristPrice - (fristPrice * discount20);
    } else if (userAge > 65) {
        discountPrice = fristPrice - (fristPrice * discount40);
    }
    console.log(discountPrice)
    document.getElementById('discountTicket').innerText = discountPrice;
    document.getElementById('userticket').innerText = userName.value;
    console.log(userticket);
});
