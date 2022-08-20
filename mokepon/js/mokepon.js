//alert('hola js')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota-jugador')
const botonReiniciar = document.getElementById('boton-reiniciar-juego')

const spanVidasJugador = document.getElementById('vidas-jugador')   
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const selectorMensajeFinal = document.getElementById('resultado')

const selectorMensajeJugador = document.getElementById('mensaje-ataque-jugador')
const selectorMensajeEnemigo = document.getElementById('mensaje-ataque-enemigo')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const eleccionMascota = document.getElementById('mascota-jugador')

const eleccionMascotaEnemigo = document.getElementById('mascota-enemigo')

const contenedorTarjetas = document.getElementById('tarjetas')

const contenedorAtaque = document.getElementById('contenedor-ataques')
let ataqueJugador = []
let ataqueEnemigo =[]
let vidasJugador = 3
let vidasEnemigo = 3

let opcionMoquepon

let selectorHipodoge
let selectorCapipepo
let selectorRatigueya

let botonFuego
let botonAgua
let botonTierra

let ataques = []
let ataqueMoquepon
let ataqueMoqueponEnemigo = []

let botones = []

class Mokepon{
    constructor(nombre, imagen, vida){
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)
capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'}
    )
ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'}, 
    {nombre: '🌱', id: 'boton-tierra'}
)

let moquepones = [hipodoge, ratigueya, capipepo]

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    selectorMensajeFinal.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    
    moquepones.forEach((Mokepon) => {
        opcionMoquepon = `<label for=${Mokepon.nombre} class="mascotas" ><img src=${Mokepon.imagen} alt=${Mokepon.nombre}>${Mokepon.nombre}</label>
        <input type="radio" name="moquepon" id=${Mokepon.nombre}>
        `
        contenedorTarjetas.innerHTML += opcionMoquepon

        selectorHipodoge = document.getElementById('Hipodoge')
        selectorCapipepo = document.getElementById('Capipepo')
        selectorRatigueya = document.getElementById('Ratigueya')
    })

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function reiniciarJuego(){
    location.reload()
}
function selecionarMascotaJugador(){
    
    if(selectorHipodoge.checked){
        eleccionMascota.innerHTML = selectorHipodoge.id
        mascotaJugador = selectorHipodoge.id
    }else if (selectorCapipepo.checked) {
        eleccionMascota.innerHTML = selectorCapipepo.id
        mascotaJugador = selectorCapipepo.id
    } else if(selectorRatigueya.checked) {
        eleccionMascota.innerHTML = selectorRatigueya.id
        mascotaJugador = selectorRatigueya.id
    }else{
        alert('selecciona una mascota')
        return
    }
    sectionSeleccionarMascota.style.display = 'none'
    selectorMensajeFinal.style.display = 'block'
    sectionSeleccionarAtaque.style.display = 'block'
    extraerAtaque(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaque(mascotaJugador){
    for (let i = 0; i < moquepones.length; i++) {
        if(mascotaJugador === moquepones[i].nombre){
            ataques = moquepones[i].ataques
        }
    }
    mostrarAtaque()
}
function mostrarAtaque(){
    ataques.forEach((ataque) => {
        ataqueMoquepon = `<button id=${ataque.id} class = 'bAtaque'>${ataque.nombre}</button>
        `
        contenedorAtaque.innerHTML += ataqueMoquepon
    })
    botones = document.querySelectorAll('.bAtaque')
}
function seleccionarMascotaEnemigo(){
    let enemigoAleatorio = aleatorio(0,moquepones.length-1)
    eleccionMascotaEnemigo.innerHTML = moquepones[enemigoAleatorio].nombre
    ataqueMoqueponEnemigo = moquepones[enemigoAleatorio].ataques
    secuenciaAtaque()   
}
function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                botonFuego = document.getElementById('boton-fuego')
                botondesabilitado(boton)
            } else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                botonAgua = document.getElementById('boton-agua')
                botondesabilitado(boton)
            }else {
                ataqueJugador.push('TIERRA')
                botonTierra = document.getElementById('boton-tierra')
                botondesabilitado(boton)
            }
            console.log(ataqueJugador)
            iniciarPelea()
        })
    })
}
function iniciarPelea(){
    if (ataqueJugador.length === 5) {
        ataqueAleatorioEnemigo()
        ganador()
    }
}

function ataqueAleatorioEnemigo(){
    for (let i = 0; i < ataqueMoqueponEnemigo.length; i++) {
        if(ataqueMoqueponEnemigo[i].nombre === '🔥'){
            ataqueEnemigo.push('FUEGO')
        }else if (ataqueMoqueponEnemigo[i].nombre === '💧') {
            ataqueEnemigo.push('AGUA')        
        } else {
            ataqueEnemigo.push('TIERRA')
        }   
    }
    ataqueEnemigo = ataqueEnemigo.sort(() => Math.random()-0.5)
    console.log(ataqueEnemigo)
}

function ganador(){
    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueEnemigo[i] === ataqueJugador[i]){
            mensajeAtaque(i)
        }else if (ataqueEnemigo[i] === 'TIERRA' && ataqueJugador[i] === 'FUEGO') {
            mensajeAtaque(i)
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueEnemigo[i] === 'FUEGO' && ataqueJugador[i] === 'AGUA'){
            mensajeAtaque(i)
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueEnemigo[i] === 'AGUA' && ataqueJugador[i] === 'TIERRA') {
            mensajeAtaque(i)
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            mensajeAtaque(i)
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
        i = vidasGanador(i)
    }
    resultadoPelea()
}
function resultadoPelea(){
    if(vidasJugador == vidasEnemigo){
        selectorMensajeFinal.innerHTML = 'EMPATE!!!'
    }else if(vidasJugador < vidasEnemigo){
        selectorMensajeFinal.innerHTML = 'PERDISTE!!!'
    }else if(vidasJugador > vidasEnemigo){
        selectorMensajeFinal.innerHTML = 'FELICITACIONES!!!'
    }
    sectionReiniciar.style.display = 'block'
}
function mensajeAtaque(index){
    
    let parrafoJugador = document.createElement('p')
    parrafoJugador.innerHTML = 'tu mascota ataco con ' + ataqueJugador[index]
    selectorMensajeJugador.appendChild(parrafoJugador)
    let parrafoEnemigo = document.createElement('p')
    parrafoEnemigo.innerHTML = 'la mascota del enemigo ataco con ' + ataqueEnemigo[index]
    selectorMensajeEnemigo.appendChild(parrafoEnemigo)
}
function vidasGanador(i){    
    if (vidasJugador === 0 && vidasEnemigo === 0) {
        return ataqueJugador.length
    }else{
        return i
    }
}
function botondesabilitado(boton){ 
    boton.disabled = true
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)