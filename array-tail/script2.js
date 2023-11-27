/* CREAZIONE ARRAY VUOTO */
let numbers = [];

/* DICHIARAZIONE DELLA QUANTITA' DEGLI ELEMENTI PRESENTI DA PARTE DELL'UTENTE */
numbers.lenght = prompt('dichiara la quantità degli elementi');

for(i=1; i <= numbers.length; i++){
    
    for(num=1 ; num <= 100 ; num++)
    num = Math.floor(Math.random() * 100 + 1)
    numbers.push = num;

}
