//RESOLVENDO O PROJETO UTILIZANDO CLASSES, OBJETOS E FUNÇÕES:

class dadosHeroi {
    constructor(nome, idade, heroiAtaque) {
        this.nome = nome;
        this.idade = idade;
        this.heroiAtaque = heroiAtaque;
    }

    atacar() {
        for (let index in this.heroiAtaque) {
            let [tipo, ataque] = this.heroiAtaque[index];
            console.log(`O ${tipo} atacou usando ${ataque}`);
        }
    }
}

let dados = {
    nome: "Bia",
    idade: 25,
    heroiAtaque: {
        0: ["guerreiro", "espada"],
        1: ["mago", "magia"],
        2: ["monge", "artes marciais"],
        3: ["ninja", "shuriken"],
    },
};

function generateInvoice(dados) {
    let heroi = new dadosHeroi(dados.nome, dados.idade, dados.heroiAtaque);
    heroi.atacar();
}

generateInvoice(dados);