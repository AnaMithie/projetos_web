let texto = document.getElementById("texto")

function mudarTexto(){
    texto.innerText = "Texto alterado"
}
function mudarCor(){
    texto.style.color = "pink"
    document.body.style.backgroundColor = "black"
}{
    function trocarFundo() {
        let campo = document.getElementById("campo")
        campo.style.backgroundColor = "blue"
    }
let imagem = document.getElementById("imagem")
function troca(){
    imagem.src = "çççççççççç.png"
}

function destroca(){
    imagem.src = "fo.webp"
}

let mensagem = document.getElementById("mensagem")
function outroTexto(){
    mensagem.innerText = "Texto alterado"
}

function voltaTexto(){
    mensagem.innerText = "Passe o mouse aqui"
}
function aparece(){
    let sumir = document.getElementById ("sumir")
    if (sumir.style.display == "none"){
        sumir.style.display = "block"
    }else{
        sumir.style.display = "none"
}

function aleatorio(){
    let tamanho = document.getElementById ("tamanho")
    let novoTamanho = Math.floor(math.random()
* (40 - 10 + 1)) + 10
tamanho.style.fontSize = novoTamanho + "px"
}
}
}

