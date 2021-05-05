
const celeste = document.getElementById('celeste');
const rojo = document.getElementById('rojo');
const amarillo = document.getElementById('amarillo');
const verde = document.getElementById('verde');

const btnEmpezar = document.getElementById('btnEmpezar');

class Juego{
    constructor(){
        this.inicializar();
    }

    inicializar(){
        btnEmpezar == null ? alert("null"): btnEmpezar.classList.add('ocultar')
    }    
}

function empezarJuego(){
    var juego = new Juego();
}