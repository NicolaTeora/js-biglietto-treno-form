// dichiarazione variabili
let userAge;
let mileage;
let fristPrice;
let discountPrice;
let userName;
const discount20 = 0.2;
const discount40 = 0.4;
const priceKm = 0.21;
const submit = document.getElementById("submit");

//assegnazione
//età passeggero
//chilometri da percorrere
submit.addEventListener("click", function () {
  userAge = document.getElementById("user-age").value;
  console.log(userAge);
  mileage = document.getElementById("distance").value;
  console.log(mileage);
  userName = document.getElementById("nameUser");
  console.log(userName);

  let resumeDetailTicket = document.getElementById("ticketScreen");
  resumeDetailTicket.classList.remove("d-none");

  //prezzo standard
  fristPrice = mileage * priceKm;

  document.getElementById("standarPrice").innerText = fristPrice + "€";

  //scontistica da applicare al prezzo standard in base all'età

  if (userAge == "minorenne") {
    discountPrice = fristPrice - fristPrice * discount20;
  } else if (userAge == "over65") {
    discountPrice = fristPrice - fristPrice * discount40;
  } else {
    discountPrice = "";
  }

  document.getElementById("discountTicket").innerText = discountPrice;
  document.getElementById("userticket").innerText = userName.value;
  console.log(userticket);
});
