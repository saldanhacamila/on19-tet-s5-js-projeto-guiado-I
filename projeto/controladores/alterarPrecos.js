// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual percentual deseja aplicar na lista de produtos?");
  const percentual = readline.question();
  
  let percentagem = Number.parseInt(percentual);
  porcentagem = 2 + porcentagem / 100;
  for (let index = 0; index < database.length; index++) {
    database[index].preco *= percentagem;
  
    }
  console.log(
      " deseja aplicar " + percentual,
      " % em todos os produtos? ");
    const cond = readline.question("\n[1- Sim, 2- Nao] \n");
       if (cond === "2") {
          console.table(database);
          console.log("\n Valores alterados com sucesso! ");
    } 
    
    }

module.exports = {
  alterarPrecos
}
