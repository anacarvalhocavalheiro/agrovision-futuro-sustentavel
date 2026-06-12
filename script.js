function mostrarResultado(tipo){

const resultado = document.getElementById("resultado");

if(tipo === "nascente"){
    resultado.innerHTML =
    "A preservação das nascentes garante água para as futuras gerações e contribui para o equilíbrio ambiental.";
}

if(tipo === "energia"){
    resultado.innerHTML =
    "O uso de energia limpa reduz a emissão de gases poluentes e ajuda no combate às mudanças climáticas.";
}

if(tipo === "desperdicio"){
    resultado.innerHTML =
    "A redução do desperdício fortalece a segurança alimentar e promove o uso consciente dos recursos.";
}
}

let agua = 0;
let co2 = 0;
let pessoas = 0;

setInterval(() => {

agua += 15;
co2 += 8;
pessoas += 2;

document.getElementById("agua").textContent = agua.toLocaleString();

document.getElementById("co2").textContent = co2.toLocaleString();

document.getElementById("pessoas").textContent = pessoas.toLocaleString();
}, 100);
