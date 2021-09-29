import React, { Component } from "react";
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import ValidacaoCadastro from './contexts/ValidacaoCadastro';

import { validaCpf, validaSenha } from "./models/cadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacaoCadastro.Provider
          value={{ cpf: validaCpf, senha: validaSenha, nome: validaSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacaoCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;