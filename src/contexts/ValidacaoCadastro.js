import React from 'react';
//import { validaCpf, validaSenha } from '../models/cadastro';

const ValidacaoCadastro = React.createContext({ 
    cpf: semValidacao,
    senha: semValidacao,
    nome: semValidacao,
    });


function semValidacao(dados) {
    console.log(dados);
    return { valido: true, texto: "" }
}

export default ValidacaoCadastro;