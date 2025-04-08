function register(req, res){
    const {nome, email, senha } = req.body;

    console.log('Dados recebidos:', { nome, email, senha});

    res.status(201).json({ mensagem: 'Usuario registrado com sucesso!'});
}

module.exports = {
    register,
};