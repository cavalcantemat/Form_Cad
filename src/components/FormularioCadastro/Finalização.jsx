import React from 'react';

import Swal from 'sweetalert2'

function Finalizacao() {


    function Teste() {
        Swal.fire(
            'COMPRA REALIZADA!',
            'Sua compra foi realizada com sucesso',
            'success'
          )
      }

    return (
        <form>
            {Teste()}
        </form>
    );
}

export default Finalizacao;