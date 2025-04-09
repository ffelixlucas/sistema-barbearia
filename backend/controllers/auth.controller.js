const bcrypt = require('bcrypt');

// Registart novos usuários

async function register(req, res){
    try {
        const {nome, email, senha } = req.body;

        // Criptografar a senha com bcrypt
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        // Mostrar no terminal

        console.log('Dados recebidos:', { 
            nome,
            email,
            senhaOriginal: senha,
            senhaCriptografada
    });

    res.status(201).json({ mensagem: 'Usuario registrado com sucesso!'});
   } catch (erro) {
    console.error('Erro ao registrar usuário:', erro);
    res.status(500).json({ mensagem: 'Erro interno ao registrar usuario'});
   }
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