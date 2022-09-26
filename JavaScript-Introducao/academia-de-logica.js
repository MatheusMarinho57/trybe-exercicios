// Descobrir a menor idade

let marinaAge = 20;
let silviaAge = 19;
let izaAge = 23;

if (marinaAge < silviaAge && marinaAge < izaAge) {
    console.log('Marina é a mais jovem entre elas');
} else if (silviaAge < marinaAge && silviaAge < izaAge) {
    console.log('Silvia é a mais jovem entre elas');
} else {
    console.log('Iza é a mais jovem entre elas');
}

// Taxa Metabólica Brasil

let age = 30;
let sex = "M"
let weight = 80
let height = 180
// let formulaMasculina = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;
// let formulaFeminina = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
let bmr;

if (sex === "M") {
    bmr = height * 6.25 + weight * 9.99 - age * 4.92 + 5;
} if (sex === "F"){
    bmr = height * 6.25 + weight * 9.99 - age * 4.92 - 161;
}

console.log('A taxa metabólica basal é '+ bmr + ' Kcal');

// Lanchonete da Trybe

let number = 4;

switch (number) {
    case 1:
      console.log('1 - Trybe Lanche Feliz');
      break
    case 2: 
      console.log('2 - McTrybe');
      break
    case 3:
      console.log('3 - TrybeWhooper');
      break
    case 4: 
      console.log('4 - X-Trybe');
      break
    case 5:
      console.log('5 - Triplo Trybe com JS');
      break
      default: 
      console.log('Não temos essa opção ainda :(')
}

const n = 12 ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado = resultado - index;
};
console.log(resultado);
