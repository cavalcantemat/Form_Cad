import React, { useState, useContext } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import ValidacaoCadastro from "../../contexts/ValidacaoCadastro"
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacaoCadastro)
    const [erros, validaCampos, possoEnviar] = useErros(validacoes);
    


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ email, senha });
                }
            }}>

            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                name="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validaCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
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