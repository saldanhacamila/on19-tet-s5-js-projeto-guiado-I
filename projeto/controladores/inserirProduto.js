// Pergunte ao usuário os dados do novo produto
// Pergunte um campo por vez, exceto id
// O id deve ser acrecido pelo sistema automaticamente usando o incrementalId
const readline = require("readline-sync");
const { database } = require("../database");
let incrementalId = 8;

const inserirProduto = () => {
  console.log("Id atual: " + incrementalId);
  incrementalId++;

  console.log("Insera o nome do produto");
  const nomeProduto = readline.question();

  console.log("Informar o valor unitario");
  const precoInserido = readline.question();
   
  console.log("Qual sera a quantidade adquirida");
  const quantidadeAdquirida = readline.question();

module.exports = {
  inserirProduto
}
