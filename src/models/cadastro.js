
function validaCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" }
  } else return { valido: false, texto: "" }
}


function validaSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "A senha deve ter entre 4 dígitos e 72 dígitos" }
  } else return { valido: false, texto: "" }
}


export { validaCpf, validaSenha }