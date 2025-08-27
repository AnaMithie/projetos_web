function saudacao(){
    console.log ("Olá")
}
saudacao()


function dobrar(numero) {
    return numero * 2
}
let resultado = dobrar(5)
console.log (resultado)

let mostrarMensagem = function() {
    console.log("Função anônima")
}
mostrarMensagem()

const somar = (a,b) => {
    return a + b
}
console.log(somar(3,7))


let paragrafo = document.getElementById("mensagem")
paragrafo.innerText= "Texto alterado"

let titulo = document.getElementById("titulo")
titulo.style.color = "blue"
titulo.style.fontSize = "30px"

let novoItem = document.createElement("li")
novoItem.innerText = "Novo item"
document.body.appendChild(novoItem)

let apagar = document.getElementById("apagar")
apagar.remove()

let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    alert ("Você clicou no botão")
})

function mostrarNome(){
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerText = "Você digitou: " + nome
}


function mudarCor() {
    document.getElementById("caixa").style.backgroundColor = "blue"
    document.getElementById("caixa").innerText = "Você passou o mouse"
}

function corOriginal(){
    document.getElementById("caixa").style.backgroundColor = "brown"
    document.getElementById("caixa").innerText = "Passe o mouse aqui"
}