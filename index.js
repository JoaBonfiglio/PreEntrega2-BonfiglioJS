let monto = parseInt(prompt("ingrese un monto"));
let plazo = parseInt(prompt("ingrese el plazo en meses"));

const cuotaMensual = monto / plazo;
const cuotas = [];

for (let i = 1; i <= plazo; i++ ) { 
    cuotas.push(cuotaMensual);
}

console.log("monto= $" + monto);
console.log("plazo= " + plazo + "meses");
console.log("cuota mensual: $" + cuotaMensual.toFixed(2));
console.log("detalles de las cuotas");

for (let indice = 0; indice < cuotas.length; indice++) {
    console.log("cuota " + (indice + 1) + ": $" + cuotas[indice].toFixed(2));
}