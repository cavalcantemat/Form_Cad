import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacaoCadastro from '../../contexts/ValidacaoCadastro';
import useErros from '../../hooks/useErros';
import InputCpf from '../../contexts/InputCpf';
import InputTel from '../../contexts/InputTel';
import '../../assets/css/index.css';

function DadosPessoais({ aoEnviar }) {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState(" ");
  const [telefone, setTelefone] = useState(" ");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(ValidacaoCadastro)
  const [erros, validaCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, telefone, novidades, promocoes });
        }
      }}>

      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validaCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        margin="normal"
        fullWidth 
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <InputCpf style={{ width: "50%", marginRight: "1%" }}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validaCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <InputTel style={{ width: "50%", marginLeft: "1%" }}
        value={telefone}
        onChange={(event) => {
          setTelefone(event.target.value);
        }}
        id="telefone"
        name="telefone"
        label="Telefone"
        variant="outlined"
        margin="normal" 
      />
      <FormControlLabel
        label="Desejo receber promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary" 
          />
        }
      />

      <FormControlLabel
        label="Desejo receber novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary" 
          /> 
        }
      />

      <div className="area-botoes">
        <Button style={{ width: "30%" }}
          variant="contained"
          color="secondary"
          type="submit">
          Voltar
        </Button>

        <Button style={{ width: "69%" }}  variant="contained"
          color="primary"
          type="submit">
          Avançar
        </Button>
        
      </div>
    </form>
  );
}

export default DadosPessoais;