import React, { Component } from "react";
import "./App.css";
import "../src/assets/css/index.css";
import "../src/assets/css/flexbox.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container } from "@material-ui/core";

import ValidacaoCadastro from "./contexts/ValidacaoCadastro";

import { validaCpf, validaSenha } from "./models/cadastro";
class App extends Component {
  render() {
    return (
        <Container component="article" maxWidth="sm">
          <ValidacaoCadastro.Provider
            value={{
              cpf: validaCpf,
              senha: validaSenha,
              nome: validaSenha
            }}>

            <FormularioCadastro
              aoEnviar={aoEnviarForm}
            />
          </ValidacaoCadastro.Provider>
        </Container>

    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;