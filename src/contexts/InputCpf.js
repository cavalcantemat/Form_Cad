import React from 'react';
import InputMask from 'react-input-mask';
import { TextField } from '@material-ui/core';

const InputCpf = (props) => (
  <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange}>
    {(inputProps) => 
    <TextField style={{ width: "49%", marginRight: "1%" }}
    {...inputProps} 
    type="text" 
    disableUnderline id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"  />}
  </InputMask>
);
export default InputCpf;