// Bucle for

let animales: string[] = ['perro', 'gato', 'tigre'];

for (let animal of animales) {
    console.log(animal);
}


// Recorrer una lista de numeros y multiplicarlos por 2
function multiplicar(a: number, b: number): void {
    console.log(a * b);
}

let numeros: number[] = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros) {
    multiplicar(numero, 2);
}



// While

let entero: number = 100;
let emergencia: number = 112;

while (entero <= emergencia) {
    console.log(entero);
    entero++;
}