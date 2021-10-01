import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import Finalizacao from "./Finalização"
import { Stepper, Step, StepLabel } from "@material-ui/core";


function FormularioCadastro({ aoEnviar }) {
    let [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    });

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Finalizacao aoEnviar={coletarDados}/>,
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }
    // function witchButton(e) {
    //     let id= e.currentTarget.id
    //     if (id === "Login") {
    //         alert(id)
    //     } else if (id === undefined) {
    //         setEtapaAtual(etapaAtual + 1);
    //     }
    // }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                     <StepLabel>Login </StepLabel> {/*onClick={(e) => witchButton(e)}*/}
                </Step>
                

                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;