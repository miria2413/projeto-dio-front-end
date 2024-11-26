// Variáveis para armazenar o nome e o XP do herói
let Heroi = "Thor"; // variavel Heroi.
let xp = 5800; // Nivel XP

// ver em qual nivel o heroi esta.
let nivel;

function classificarNivelDeHeroi() {
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // saida final
    console.log(`O Herói de nome ${Heroi} está no nível de ${nivel}`);
};


classificarNivelDeHeroi();