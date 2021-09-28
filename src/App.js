import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import {validaCpf, validaSenha} from "./models/cadastro" 

function App() {
  return (
    <Container component="article" maxWidth="sm" >
      <Typography
        variant="h4"
        align="center"
        component="h1">
        FORMULARIO DE CADASTRO
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf: validaCpf, senha: validaSenha}} />
    </Container>
  );

  function aoEnviarForm(dados) {
    console.log(dados);
  }

}
export default App;