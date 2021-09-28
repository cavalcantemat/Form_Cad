// import './estilo.css';
import React, { useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';



function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    
    return (

        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField

                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
                id="password"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <Box sx={{ width: 500 }} >
                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Voltar
                </Button>

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