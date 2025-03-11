function toggleImage() {
    const img = document.getElementById("image");
    img.style.display = img.style.display === "none" ? "block" : "none";
}

function toggleTheme() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "white" : "black";
    document.body.style.color = document.body.style.color === "white" ? "black" : "white";
}

function completeText() {
    document.getElementById("sentence").innerText = "Meu nome é João, tenho 25 anos, moro em São Paulo, estudo no IFSP e faço o curso de Ciência da Computação.";
}

function changeColor() {
    const brasil = document.getElementById("brasil");
    const colors = ["green", "yellow", "blue"];
    brasil.style.color = colors[Math.floor(Math.random() * colors.length)];
}

function showPrize(door) {
    const prizeText = document.getElementById("prize");
    if (door === 1) {
        alert("Você ganhou um carro!");
        prizeText.innerText = "🏎️";
    } else if (door === 2) {
        alert("Você não ganhou nada!");
        prizeText.innerText = "❌";
    } else {
        alert("Parabéns, você encontrou o tesouro!");
        prizeText.innerText = "💎";
    }
}

function resizeImage() {
    const img = document.getElementById("resizableImage");
    const size = Math.floor(Math.random() * (300 - 20 + 1)) + 20;
    img.style.width = size + "px";
    img.style.height = size + "px";
}

let step = 0;
function changeLight() {
    const lights = ["light1", "light2", "light3"];
    const colors = ["red", "yellow", "green"];
    lights.forEach((light, index) => {
        document.getElementById(light).style.backgroundColor = "black";
    });
    document.getElementById(lights[step]).style.backgroundColor = colors[step];
    alert(step === 0 ? "PARE" : step === 1 ? "ATENÇÃO" : "PODE IR!");
    step = (step + 1) % 3;
}

function showMovie() {
    document.getElementById("movie").innerText = " Filme Sugerido!";
}

function hideMovie() {
    document.getElementById("movie").innerText = "Filme de comédia";
}
