// if - else

let autorizado: boolean = true;

if (autorizado) {
    console.log('Puede entrar');
} else {
    console.log('No puede entrar');
}

// if - else if
let entero: number = 100;

if (entero == 99) {
    console.log('Es 99');
} else if (entero === 100) {
    console.log('Es 100')
} else {
    console.log('No 99 ni 100');
}

// Switch

let color: string = 'amarillo';

switch (color) {
    case 'verde':
        console.log('Exito');
        break;
    case 'amarillo':
        console.log('Advertencia');
        break;
    default:
        console.log('Error');
}