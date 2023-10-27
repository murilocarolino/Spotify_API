'use strict'

const barra = document.getElementById('enter')
const tela = document.getElementById('sair')
const pesquisar = document.getElementById('pesquisar')

function enter () {
    lamp.src = './img/ligada.jpg'
}

function sair () {
    lamp.src = './img/desligada.jpg'
}

botaoLigar.addEventListener('click', ligar)
botaoDesligar.addEventListener('click', desligar)
lamp.addEventListener('dblclick', quebrar)