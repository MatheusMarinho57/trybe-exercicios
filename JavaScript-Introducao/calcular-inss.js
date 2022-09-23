const salario = 3000;
let INSS = '';   

if (salario <= 1556.94){
    console.log('Sua alíguota para INSS é de R$'+ salario * 0.08);
}
else if (salario >= 1556.95 && salario <= 2954.93){
    console.log('Sua alíguota para INSS é de R$ '+ salario * 0.09);
}
else if (salario > 2594.93 && salario <= 5189.82){
    console.log('Sua alíguota para INSS é de R$ '+ salario * 0.11)
} else {
    console.log('Sua alíguota para é de R$ 570,88');
}