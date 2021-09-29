// import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosEntrega from './DadosEntrega';
import DadosUsuario from './DadosUsuario';
import { Typography, Stepper, StepLabel, Step } from '@material-ui/core';
import { useEffect, useState } from 'react';


function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletaDados} />,
        <DadosPessoais aoEnviar={coletaDados} />,
        <DadosEntrega aoEnviar={coletaDados} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ];

    function coletaDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }


    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;