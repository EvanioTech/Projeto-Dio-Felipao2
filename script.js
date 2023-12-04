const nomeHeroi = "Octadroid"

let elo = calcRanked(116, 15)

let saldo = 116 - 15

function calcRanked(vitorias, derrotas) {
    
    const saldoVitorias = vitorias - derrotas;

    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return nivel
}
console.log("O Herói " + nomeHeroi + " tem de saldo " + saldo + " wins e está no elo " + elo + "!" );


