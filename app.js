const leDicoDeChuck = ['"Chuck Norris a réussi à trouver la page 404."', '"Chuck Norris peut cultiver un champ magnétique."', '"Chuck Norris ne se mouille pas, c\'est l\'eau qui se Chuck Norris."', '"Le dernier a avoir serré la main à Chuck Norris c\'est Jamel Debbouze."', '"Quand Google ne trouve pas quelque chose, il demande à Chuck Norris."', '"Quand la tartine de Chuck Norris tombe, la confiture change de côté."', '"Quand la tartine de Chuck Norris tombe, la confiture change de côté."', '"Lorsque Chuck Norris fait l\'amour à sa femme, la voisine jouit aussi."', '"Chuck Norris ne prends jamais de laxatif; personne ne fait chier Chuck Norris !"', '"À son mariage, Chuck Norris avait Oncle Ben\'s en personne pour lui jeter du riz."'];


function setBg() {

    const randomColor = () => Math.random() * 256 >> 0;
    const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    document.body.style.backgroundColor = color;
    document.querySelector("button").style.backgroundColor = color;
    document.querySelector("h1").style.color = color;
    document.querySelector("p").style.color = color;
} setBg();


function aleatoire(event) {
    setBg();
    h1.textContent = [leDicoDeChuck[Math.floor(Math.random() * leDicoDeChuck.length)]];
}

const h1 = document.querySelector("h1");

genNew.addEventListener("click", aleatoire);