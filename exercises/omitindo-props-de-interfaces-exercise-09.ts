// Exemeplo do uso da omissão de certas propriedades de interfaces extendidas

interface IPessoa {
	nome: string;
	idade: number;
	nacionalidade: string;
};


interface IBrasileiro extends IPessoa Omit<Pessoa, 'nacionalidade'> {
	
};


const brasileiro: IBrasileiro = {
	
};


