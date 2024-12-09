

// Metodo  if/else
let voto = 29;

if(voto <18 && voto >=0){
    console.log(`Insufficiente`);
} else if ( voto >=18 && voto <21) {
    console.log(`Sufficiente`);
} else if ( voto >=21 && voto <24) {
    console.log(`Buono`);
} else if ( voto >=24 && voto <27 ) {
    console.log(`Distinto`);
} else if ( voto >=27 && voto <=29 ) {
    console.log(`Ottimo`);
} else if ( voto == 30 ) {
    console.log(`Eccellente`);
} else {
    console.log(`valore fuori "range"`);
    
}




// Metodo switch
let voto_x = 30;

switch (true){
    case voto_x <18 && voto_x >=0:
        console.log(`Insufficiente`);
        break;

    case voto_x >=18 && voto_x <21:
        console.log(`Sufficiente`);
        break;

    case voto_x >=21 && voto_x <24:
        console.log(`Buono`);
        break;

    case voto_x >=24 && voto_x <27:
        console.log(`Ottimo`);
        break;

    case voto_x == 30 :
        console.log(`Eccellente`);
        break;

    default:
        console.log(`valore fuori "range"`);
}


