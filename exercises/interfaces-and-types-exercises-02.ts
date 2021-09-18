interface IAnimal {
	nome: string;
	tipo: 'terrestre' | 'aquático';
	executarVoz(alturaEmDecibeis: number): void;
	domestico: boolean;
}


interface IFelino extends IAnimal {
	visaoNoturna: boolean;
}


const animal: IAnimal = {
	nome: "Elefante",
	tipo: "terrestre",
	executarVoz: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
	domestico: false
};

animal.executarVoz(10)

const felino: IFelino = {
	nome: 'Leão',
	tipo: 'terrestre',
	visaoNoturna: true,
	executarVoz: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
	domestico: false
};


interface ICanino extends IAnimal {
	porte: 'pequeno' | 'medio' | 'grande'
};


type IDomestico = IFelino | ICanino;


const snoopy: IDomestico {
	domestico: true,
	nome: 'cachorro',
	tipo: 'terrestre',
	executarVoz: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
	porte: 'medio',
};










