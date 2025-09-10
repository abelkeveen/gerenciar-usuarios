// Importação de funções
const {
  retornarUsuarios,
  adicionarNovoUsuario,
} = require("../src/gerenciarUsuarios");

const { expect } = require("chai");

//grupo de teste
describe("Testar as funções de Gestão de Usuários", function () {
  it("Validar que posso adicionar um novo usuário na lista", function () {
    // 1. Adicionar um novo nome na lista de usuários
    adicionarNovoUsuario({
      nome: "maria", 
      email: "maria@gmail.com"
    });

    // 2. Retornar a lista de usuários na caixa lista de usuários
    const listaDeUsuarios = retornarUsuarios();

    // 3. Comparar se o novo nome está no fim da lista de usuários
    expect(listaDeUsuarios.at(-1).nome).to.equal("maria"); 
    // at(-1) vai pegar o último objeto adicionado | (.nome) vai pegar a propriedade nome e comparar
    expect(listaDeUsuarios.at(-1).email).to.equal("maria@gmail.com"); // to.equal compara valores do objeto

    expect(listaDeUsuarios.at(-1)).to.eql({ // to.eql compara o objeto
        nome: "maria", 
        email: "maria@gmail.com"
    });
  });
});
