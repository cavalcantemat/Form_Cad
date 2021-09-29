import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import { validaCpf, validaSenha } from "./models/cadastro"
import ValidacaoCadastro from './contexts/ValidacaoCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm" >
      <Typography
        variant="h4"
        align="center"
        component="h1">
        FORMULARIO DE CADASTRO
      </Typography>
      <ValidacaoCadastro.Provider value={{ cpf: validaCpf, senha: validaSenha, nome: validaSenha }}>

      </ValidacaoCadastro.Provider>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
    </Container>
  );

  function aoEnviarForm(dados) {
    console.log(dados);
  }

}
export default App;