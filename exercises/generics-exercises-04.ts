// Generic types

// Observe que o padrão para Generics é <T>
function adicionaApendiceALista<NaoSei>(array any[], valor: NaoSei) {
	return array.map(item => item + valor);
}


adicionaApendiceALista([1, 2, 3], 1);




