/*
Tipos de variables:
    Texto
    Números
    Booleanos
    Listas
    Objetos
    Constantes
*/

// Texto
let libro: string = 'El Programador Pragmático';
let telf: string = '+34 123 45 67 89'
let color: string = 'Amarillo'

// Números
let entero: number = 10;
let decimal: number = 1.464;

// Booleanos
let autorizado: boolean = true;
let seleccionado: boolean = false;

// Listas (Permiten guardar muchos tipos de datos de forma ordenada)
let numeros: number[] = [1, 23, 55, 14, 33];
let animales: string[] = ['perro', 'gato', 'tigre'];

// Crear mis propios tipos de datos basado en otros tipos
type mixto = string | number | boolean | string[];
let datosMixtos: mixto[] = ['texto', 33, true, ['lista dentro de otra lista']];

// Objetos

// Objeto usando "key"
let jugadores: { [key: number]: string} = {
    10: 'Mbappe',
    7: 'Cristiano Ronaldo'
}

// Objeto usando record
let paises: Record<string, string> = {
    ES: 'España',
    PT: 'Portugal',
    IT: 'Italia'
}

let emails: Record<string, string[]> = {
    'Juan': ['juan@gmail.com'],
    'Ricardo':['ricardo@gmail.com', 'ricardo@hotmail.com']
}

// Constantes
const pi: number = 3.14159265359;