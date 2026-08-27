/*
Interface: El plano que dice qué debe tener algo.

Clase: La fábrica que lo construye de verdad.

La interface dice "un coche debe tener 4 ruedas", la clase fabrica el Toyota real.
*/

interface Lang {
    nombre: string;
    anio?: number;
    descripcion: Function;
}

/* 
Este codigo se simplificará más adelante con una clase


let javascript: Lang = {
    nombre: 'Javascript',
    anio: 1995,
    descripcion: function() {
        console.log(`${this.nombre} fue creado en ${this.anio}`);
    }
}

javascript.descripcion()

*/


class Lenguaje implements Lang {
    nombre: string;
    anio: number;

    constructor(nombre:string, anio: number){
        this.nombre = nombre;
        this.anio = anio;
    }

    descripcion() {
        console.log(`${this.nombre} fue creado en ${this.anio}`)
    }
}


let html = new Lenguaje ('HTML', 1993);
html.descripcion();
let css = new Lenguaje ('CSS', 1996);
css.descripcion();
