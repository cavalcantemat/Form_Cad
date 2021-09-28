// import React, { useState } from 'react';
import DadosPessoais from './Dados Pessoais';
import DadosEntrega from './DadosEntrega';
import DadosUsuario from './DadosUsuario';
import { Typography, Stepper, StepLabel, Step } from '@material-ui/core';
import { useEffect, useState } from 'react';


function FormularioCadastro({ aoEnviar, validacoes }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    
    useEffect(()=>{
        if(etapaAtual === formularios.length-1){
          aoEnviar(dadosColetados);
        }
      })

    const formularios = [ 
        <DadosUsuario aoEnviar={coletaDados} validacoes={validacoes} />,
        <DadosPessoais aoEnviar={coletaDados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={coletaDados} validacoes={validacoes}/>,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ];

    function coletaDados(dados) {
        setDados({...dadosColetados, ...dados});
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