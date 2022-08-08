function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let jugador = 0
let pc = 0 
let ganados = 0
let perdidos = 0
// piedra gana tijera
// papel gana piedra
// tijera gana papel
alert('REGLA: piedra gana tijera gana papel gana piedra')
while(ganados < 2 && perdidos < 2){
    pc = aleatorio(1, 3)
    do {
        jugador = prompt('elige una opcion: 1 para pidra, 2 para papel, 3 para tijera')
    } while (jugador != 1 && jugador !=2 && jugador !=3);
    
    alert('elegiste ' + eleccion(jugador))
    alert('la pc eligio ' + eleccion(pc))
    if(pc == jugador){
        alert('EMPATE')
    }else if (pc == 3 && jugador == 1) {
        alert('GANASTE')
        ganados++
    } else if (pc == 1 && jugador == 2){
        alert('GANASTE')
        ganados++
    } else if (pc == 2 && jugador == 3) {
        alert('GANASTE')
        ganados++
    } else {
        alert('PERDISTE')
        perdidos++
    }
}

alert( 'ganaste ' + ganados + ' veces y el pc gano ' + perdidos + ' veces')
if(ganados > perdidos){
    alert('GANASTE EL 2 DE 3')
}else{
    alert('PERDISTE EL 2 DE 3')
}

function eleccion(opcion){
    let resultado = ''
    if(opcion == 1){
        resultado = 'PIEDRA'
    }else if (opcion == 2) {
                resultado = 'PAPEL'
    } else if (opcion == 3){ 
        resultado = 'TIJERA'
    }else{
        resultado = 'LA OPCION INCORRECTA'
    }
    return resultado
}