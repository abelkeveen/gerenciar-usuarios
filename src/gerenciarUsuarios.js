const usuarios = ["abel", "jully", "raimundo", "lili"];

function retornarUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(nome) {
  usuarios.push(nome);
}

module.exports = {
  retornarUsuarios,
  adicionarNovoUsuario
};
