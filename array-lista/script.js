/* CREAZIONE ARRAY FRIGO PER INSERIMENTO ELEMENTI FRUTTA */
let fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

/* INSERIMENTO DELL'ELEMENTO FRUTTA ALL'INTERNO NDELL'ARRAY FRIGO */
fridge.push('pesca');

/* CREAZIONE DEL CICLO FOR PER RICERCARE L'ELEMENTO 'COCOMERO' ALL'INTERNO DELL'ARRAY FRIGO */
let check_fruit;
for(let i=0; i < fridge.length; i++){
    check_fruit = false;
    if(fridge[i]  == 'cocomero'){
        check_fruit =true;
        console.log("Trovato! Devo solo preparare il cocktail.");
    }
    else{
        console.log("Oh no, devo uscire a comprare il cocomero!");
    }
}

