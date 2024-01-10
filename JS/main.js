// dichiarazione variabili
let userAge;
let mileage;
let fristPrice;
let discountPrice;
const discount20 = 0.2;
const discount40 = 0.4;
const priceKm = 0.21;

//assegnazione
//eta passeggero
//chilometri da percorrere

userAge = document.getElementById('user-age');
console.log(userAge);

mileage = document.getElementById('distance');
console.log(mileage);

//prezzo standard

fristPrice = mileage * priceKm;
console.log(fristPrice);

//scontistica da applicare al prezzo standard in base all'età

if (userAge < 18) {
    discountPrice = fristPrice - (fristPrice * discount20);
}

if (userAge > 65) {
    discountPrice = fristPrice - (fristPrice * discount40);
}