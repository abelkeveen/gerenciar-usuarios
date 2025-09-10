// Criando uma variavel em fila
const usuarios = [// Objeto
  {
    nome: "Abel",// Propriedade
    email: "abel@gmail.com",
  },
  {
    nome: "Jully",
    email: "jully@linda.com",
  },
  { 
    nome: "Lili", 
    email: "lili@gmail.com" 
  },
  { 
    nome: "raimundo", 
    email: "raimundo@gmail.com" },
];
// Comando para contar valores de uma lista
usuarios.length;

//Criando um função para retornar a variavel
function retornarUsuarios() {
  return usuarios;
}

//Criando uma função para adicionar usuários na fila
function adicionarNovoUsuario(usuario) {
  usuarios.push(usuario);
}

//Exportando a função para o arquivo gerenciarUsuarios
module.exports = {
  retornarUsuarios,
  adicionarNovoUsuario,
};
