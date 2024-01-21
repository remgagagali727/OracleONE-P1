let maxVal = 100;
let minVal = 1;
let secretNumber = Math.floor(Math.random()*maxVal-minVal+1)+minVal;
let numeroUsuario = 0;
let intentosJuego = 1;
//let palabraVez = "intento";
let maxTries = Math.floor(maxVal/3);

while(numeroUsuario != secretNumber) {
    numeroUsuario = parseInt(prompt("Pasa un numero de "+minVal+" a "+maxVal+": "));

    console.log(numeroUsuario);

    if(secretNumber == numeroUsuario) {
        alert(`Acertaste, el numero es ${numeroUsuario} y utilizaste ${intentosJuego} ${intentosJuego==1?'vez':'veces'}`);
        break;
    } else {
        if(numeroUsuario > secretNumber) {
            alert("El numero es mas pequeño");
        } else {
            alert("El numero es mayor");
        }
        //palabraVez = "intentos";
    }

    if(intentosJuego >= maxTries) {
        alert("Usaste el maximo numero de "+maxTries+" intentos");
        break;
    }

    intentosJuego++;
}
