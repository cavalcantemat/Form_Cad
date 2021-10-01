// import './estilo.css'
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
//import { getAddress } from 'address-br';

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    // async function BuscaEndereco() {
    //     const address = getAddress(13253616); 
    //     const {bairro, cidade, estado, rua} = address;
    //     console.log(bairro,"\n", cidade,"\n", estado,"\n", rua);
    //     }

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, estado, cidade });
            }}>

            <TextField style={{ width: "49%", marginRight: "1%" }}
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
                name="cep"
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <Button style={{ width: "49%", marginLeft: "1%", marginBottom: "-61px", height: "56px" }}
                variant="text"
                color="secondary">
                Não sei meu CEP
            </Button>

            <TextField style={{ width: "49%", marginRight: "1%" }}
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
                id="numero"
                name="endereco"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField style={{ width: "49%", marginLeft: "1%" }}
                value={complemento}
                onChange={(event) => {
                    setComplemento(event.target.value);
                }}
                id="Complemento"
                label="Complemento"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
                id="endereco"
                name="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField style={{ width: "49%", marginRight: "1%" }}
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
                id="estado"
                name="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField style={{ width: "49%", marginLeft: "1%" }}
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
                id="cidade"
                name="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <div className="area-botoes">
                <Button style={{ width: "30%" }}
                    variant="contained"
                    color="secondary"
                    type="submit">
                    Voltar
                </Button>

                <Button style={{ width: "69%" }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth>
                    Finalizar Cadastro
                </Button>
            </div>
        </form>
    );
}

export default DadosEntrega;