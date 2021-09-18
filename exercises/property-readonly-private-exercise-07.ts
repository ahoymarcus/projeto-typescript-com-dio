// Criando variáveis com propriedade readonly e private

interface ICachorro {
	nome: string;
	idade: number;
	parqueFavorito?: string
}

type CachorroSomenteLeitura = {
	+readonly [k in keyof Cachorro]-?: Cachorro[k]
};


// const meuCachorro: ICachorro = {
	// nome: 'Apolo',
	// idade: 14
// };


class MeuCachorro implements CachorroSomenteLeitura {
	idade;
	nome;
	parqueFavorito;
	
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
		this.parqueFavorito = parqueFavorito;
	}
}


const cao = new MeuCachorro('Apolo', 14);





