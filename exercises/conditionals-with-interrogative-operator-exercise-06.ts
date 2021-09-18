interface IUsuario {
	id: string;
	email: string;
	cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
};






function redirecione(usuario: IUsuario | IAdmin) {
	if (usuario.cargo) {
		// redirecionar para a área de administração
	}
	
	// redirecionar para a área do usuário
}






