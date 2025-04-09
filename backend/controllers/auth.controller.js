
// Registart novos usuários

function register(req, res){
    const {nome, email, senha } = req.body;

    console.log('Dados recebidos:', { nome, email, senha});

    res.status(201).json({ mensagem: 'Usuario registrado com sucesso!'});
}

//Login

function loginUser(req, res){
    const {email, senha} = req.body;

    //simulando um usuário cadastrado

    const  usuarioSimulado = {
        email: 'usuario@teste.com',
        senha: '123456'
    };

    //Verificando  se email e senha conferem

    if (email === usuarioSimulado.email && senha === usuarioSimulado.senha){
        return res.status(200).json({mensagem: 'Login Realizado com sucesso!'});
    } else {
        return res.status(401).json({ mensagem: 'Credenciais inválidas'});
    }
}

module.exports = {
    register,
    loginUser
};