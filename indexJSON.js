//PROJETO RESOLVIDO UTILIZANDO JSON:

 let dados = {
	    nome: "Bia",
        idade: 25,
        heroiTipoAtaque: {
            0: ["guerreiro", "espada"],
            1: ["mago", "magia"],
            2: ["monge", "artes marciais"],
            3: ["ninja", "shuriken"],
    },
}

function generateInvoice(dados){
    for(let index in dados.heroiTipoAtaque){
        let [tipo, ataque] = dados.heroiTipoAtaque[index]
        console.log(`O ${tipo} atacou usando ${ataque}`)
    }
}

generateInvoice(dados)