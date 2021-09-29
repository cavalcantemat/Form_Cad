import React, { useState, useContext } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import ValidacaoCadastro from "../../contexts/ValidacaoCadastro"

function DadosUsuario({ aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

    const validacoes = useContext(ValidacaoCadastro)
    function validaCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros};
        novoEstado[name] =  validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar() {
        for(let campo in erros) {
           if(!erros[campo].valido) {
               return false
           }
        }
        return true
    }

    return (

        <form 
            onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }}}>
        
            <TextField
                value={email}
                onChange={(event) => { 
                    setEmail(event.target.value) 
                }}
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField

                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validaCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.valido}
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <Box>
                {/* <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Voltar
                </Button> */}

                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Avançar
                </Button>
            </Box>

        </form>
    )
}

export default DadosUsuario