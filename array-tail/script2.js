
let user_length = prompt('dichiara la quantità degli elementi');

let numbers = [];
for(let i=0; i<user_length; i++){
    let num = Math.floor(Math.random() * 100 + 1)
    numbers.push(num);
}
console.log(numbers);

for(let i=user_length -1; i>=user_length-5; i--){
    console.log(numbers[i]);
}