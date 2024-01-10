# js-biglietto-treno-form

## Traccia

Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni calcolare il <u>prezzo standard</u> totale del biglietto di viaggio:

- il prezzo del biglietto è definito in base ai km (0.21€ al km)

ed evenetuale <u>prezzo scontato</u> se:

- minorenni sconto del 20%
- over 65 sconto del 40%

### Milestone 1 

Iniziare il programma senza alcuna estetica, usando solamente:

- 2 input 
- 1 bottone
- risposta in console

### Milestone 2

Al termine dell **Milestone 1** realizzare:
- 1 form in pagina per input informazioni utente
- anteprima calcolo prezzo
- output in pagina dei dati e del prezzo finale con max 2 decimali per i cent.

### Bonus
Visualizzare biglietto con il click di un bottone

## Svolgimento

Chiedere all'utente le informazioni base:

- **Età** & **Kilometraggio** da percorrere;
- Calcolare il prezzo standard

**SE** l'**Età** è:
- >18 allora applicare 20% di sconto al <u> Prezzo Finale </u>
- **SE** <65 allora applicare 40% di sconto al <u> Prezzo Finale </u>

<u> Restituire a schermo </u> il **Prezzo Finale**. 