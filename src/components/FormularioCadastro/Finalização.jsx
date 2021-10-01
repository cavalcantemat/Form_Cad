import React from 'react';

import Swal from 'sweetalert2'

function Finalizacao({aoEnviar}) {


    function CompraRealizada() {
        Swal.fire(
            'COMPRA REALIZADA!',
            'Sua compra foi realizada com sucesso',
            'success'
          )
      }

    return (
        <form>
            {CompraRealizada()}
            alert({})
        </form>
    );
}

export default Finalizacao;