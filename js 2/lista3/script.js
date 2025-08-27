function saudacao(){
    console.log ("Olá")
}
saudacao()


function mostrarNome(){
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerText = "Olá! " + nome
}

let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    alert ("Você clicou! ^-^")
})


document.getElementById("TrocarTexto").onclick = function () {
  document.getElementById("Paragrafo").innerText = "Texto alterado com JS!"
};



function mudarCor() {
    document.getElementById("fundao").style.backgroundColor = "white"
}

function corOriginal(){
    document.getElementById("fundao").style.backgroundColor = "rgb(0, 232, 240)"
   
}


document.getElementById("botaoAdicionar").onclick = function () {
  const novaLi = document.createElement("li");
  novaLi.textContent = "Novo item";
  document.getElementById("Lista").appendChild(novaLi)
};


document.getElementById("Remover").onclick = function () {
  let paragrafo = document.getElementById("removerp")
  if (paragrafo) {
    paragrafo.remove()
  }
}

const multiplica = (a, b) => a * b;


document.getElementById("botaoEstilizar").onclick = () => {
  let titulo = document.getElementById("titulo")
  let texto = document.getElementById("texto")

  titulo.style.color = "green"
  titulo.style.fontSize = "35px"
  texto.style.color = "blue"
  texto.style.fontSize = "20px"
};


const multiplicar = (a, b) => a * b
document.getElementById("btnMultiplicar").onclick = () => {
  const a = +document.getElementById("num1").value
  const b = +document.getElementById("num2").value
  const resultado = multiplicar(a, b)
  document.getElementById("resultado").innerText = "Resultado: " + resultado
}

document.getElementById("campoTexto").oninput = function () {
  document.getElementById("textoDigitado").innerText = this.value
}


document.getElementById("botaoMouseover").onmouseover = function () {
  this.innerText = "Você passou o mouse!"
}


document.getElementById("botaoEsconder").ondblclick = function () {
  document.getElementById("paragrafoEscondido").style.display = "none"
}


document.getElementById("botaoFonte").onclick = function () {
  let tamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10
  document.getElementById("textoFonte").style.fontSize = tamanho + "px"
}