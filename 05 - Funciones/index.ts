// Funciones

// Función con retorno
function sumar(primero: number, segundo:number): number {
    return primero + segundo;
}

let resultadoSuma = sumar(3,5);
console.log(resultadoSuma);


// Función sin retorno
function multiplicar(primero:number, segundo:number): void { // La funcion no retorna nada
    console.log(primero * segundo);
}

multiplicar(5,5);

// Función imprimir primer elemento de una lista 
/*
let lista = ['animales']

function imprimirPrimerElemento(lista: any[]): void {
    console.log(lista[0]);
}
imprimirPrimerElemento(lista);
*/


// Algoritmo quicksort para ordenar una lista de numeros

const lista: number[] = [5, 12, 897, 15, 33, 4];

function quicksort(lista: number[]): number[] {
    if (lista.length <= 1) {
        return lista;
    }
    let referencia = lista[0];
    let izquierda: number[] = [];
    let derecha: number[] = [];
    for (let i = 1; i < lista.length; i++) {
        lista[i] < referencia
            ? izquierda.push(lista[i])
            : derecha.push(lista[i]);
    }
    return quicksort(izquierda).concat(referencia, quicksort(derecha));
};    