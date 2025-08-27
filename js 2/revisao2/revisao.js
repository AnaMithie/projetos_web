// Entrada de Dados
function boasVindas() {
  const nome = prompt("Digite seu nome:");
  alert("Bem-vindo(a), " + nome + "!");
}

function mostrarValor() {
  const texto = document.getElementById("entradaTexto").value;
  document.getElementById("saidaTexto").innerText = "Você digitou: " + texto;
}

// Conversão de Tipos
function somaValores() {
  const n1 = parseFloat(prompt("Digite o primeiro número:"));
  const n2 = parseFloat(prompt("Digite o segundo número:"));
  alert("A soma é: " + (n1 + n2));
}

function concatenarNumero() {
  const numero = prompt("Digite um número:");
  alert("Você digitou o número: " + numero + " como texto.");
}

function verificarMaioridade() {
  const idade = parseInt(prompt("Digite sua idade:"));
  if (idade >= 18) {
    alert("Você é maior de idade.");
  } else {
    alert("Você é menor de idade.");
  }
}

// Funções de Texto
function manipularTexto() {
  const frase = prompt("Digite uma frase:");
  alert("Total de caracteres: " + frase.length);
  alert("Maiúsculas: " + frase.toUpperCase());
  alert("Minúsculas: " + frase.toLowerCase());
  
  const palavraAntiga = prompt("Qual palavra deseja substituir?");
  const palavraNova = prompt("Por qual palavra deseja substituir?");
  alert("Nova frase: " + frase.replaceAll(palavraAntiga, palavraNova));
  
  const palavraProcurada = prompt("Digite uma palavra para verificar se existe:");
  alert(frase.includes(palavraProcurada) ? "A palavra existe!" : "A palavra NÃO existe.");

  alert("Caractere na posição 5: " + frase.charAt(4));
}

// Funções Matemáticas
function adivinharNumero() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  const tentativa = parseInt(prompt("Adivinhe o número de 1 a 10:"));
  if (tentativa === numeroSecreto) {
    alert("Parabéns! Você acertou.");
  } else {
    alert("Errado! O número era " + numeroSecreto);
  }
}

function arredondarValores() {
  const numero = parseFloat(prompt("Digite um número decimal:"));
  alert("Arredondado para cima: " + Math.ceil(numero));
  alert("Arredondado para baixo: " + Math.floor(numero));
  alert("Arredondado normalmente: " + Math.round(numero));
}

function manipularNumeros() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
    const n = parseFloat(prompt(`Digite o número ${i + 1}:`));
    numeros.push(n);
  }
  alert("Maior número: " + Math.max(...numeros));
  alert("Menor número: " + Math.min(...numeros));
}

function novosValores() {
  const numero = parseFloat(prompt("Digite um número:"));
  alert("Valor absoluto: " + Math.abs(numero));
  alert("Elevado à 4ª potência: " + Math.pow(numero, 4));
  alert("Raiz quadrada: " + Math.sqrt(numero));
}

// Datas
function mostrarData() {
  const hoje = new Date();
  console.log("Data atual: " + hoje.toLocaleDateString());
  alert("Veja a data atual no console (F12).");
}

function diasParaAniversario() {
  const hoje = new Date();
  const aniversario = new Date(hoje.getFullYear(), 9, 15); // Ex: 15 de Outubro

  if (hoje > aniversario) {
    aniversario.setFullYear(hoje.getFullYear() + 1);
  }

  const diffMs = aniversario - hoje;
  const dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  alert(`Faltam ${dias} dias para o seu aniversário.`);
}
