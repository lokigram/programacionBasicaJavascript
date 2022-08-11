//alert('hola js')
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota-jugador')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById('boton-ataque-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-ataque-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-ataque-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar-juego')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function reiniciarJuego(){
    location.reload()
}
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else if(ataqueAleatorio = 3){
        ataqueEnemigo = 'TIERRA'
    }
    ganador()
}
function ganador(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        mensajeAtaque('EMPATE')
    }else if (ataqueEnemigo == 'TIERRA' && ataqueJugador == 'FUEGO') {
        mensajeAtaque('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueEnemigo == 'FUEGO' && ataqueJugador == 'AGUA'){
        mensajeAtaque('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueEnemigo == 'AGUA' && ataqueJugador == 'TIERRA') {
        mensajeAtaque('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        mensajeAtaque('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    vidasGanador()
}
function vidasGanador(){
    let selectorMensajeFinal = document.getElementById('mensaje-final')
    let parrafo = document.createElement('p')
    if(vidasJugador == 0){
        parrafo.innerHTML = 'PERDISTE!!!'
        selectorMensajeFinal.appendChild(parrafo)
        botondesabilitado()
    }else if(vidasEnemigo == 0){
        parrafo.innerHTML = 'FELICITACIONES!!!'
        selectorMensajeFinal.appendChild(parrafo)
        botondesabilitado()
    }
}
function botondesabilitado(){
    let botonFuego = document.getElementById('boton-ataque-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-ataque-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-ataque-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}
function mensajeAtaque(resultado){
    let selectorMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo  + ', ' + resultado
    selectorMensaje.appendChild(parrafo)
}
function selecionarMascotaJugador(){

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let selectorHipodoge = document.getElementById('hipodoge')
    let selectorCapipepo = document.getElementById('capipepo')
    let selectorRatigueya = document.getElementById('ratigueya')
    let eleccionMascota = document.getElementById('mascota-jugador')
    if(selectorHipodoge.checked){
        eleccionMascota.innerHTML = 'Hipodoge'
    }else if (selectorCapipepo.checked) {
        eleccionMascota.innerHTML = 'Capipepo'
    } else if(selectorRatigueya.checked) {
        eleccionMascota.innerHTML = 'Ratigueya'
    }else{
        alert('selecciona una mascota')
    }
    seleccionarMascotaEnemigo()

}
function seleccionarMascotaEnemigo(){
    let enemigoAleatorio = aleatorio(1,3)
    let eleccionMascotaEnemigo = document.getElementById('mascota-enemigo')
    if(enemigoAleatorio == 1){
        eleccionMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (enemigoAleatorio == 2) {
        eleccionMascotaEnemigo.innerHTML = 'Capipepo'
    }
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)