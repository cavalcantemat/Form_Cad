import React from 'react';
import InputMask from 'react-input-mask';
import { TextField } from '@material-ui/core';

const InputTel = (props) => (
  <InputMask mask="(99) 99999-9999" value={props.value} onChange={props.onChange}>
    {(inputProps) => 
    <TextField style={{ width: "49%", marginLeft: "1%" }}
    {...inputProps} 
    type="text" 
    disableUnderline id="CPF"
        name="telefone"
        label="Telefone"
        variant="outlined"
        margin="normal"  />}
  </InputMask>
);
export default InputTel;