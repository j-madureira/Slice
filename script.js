//Array 
let pessoas = []

//Função para inserir pessoas no Array

function inserirPessoas(nome,idade){
    return {
        nome,
        idade
    }
}

pessoas.push(inserirPessoas("João",15));
pessoas.push(inserirPessoas("Mariana",27));

//Copia do Array original
let novasPessoas = pessoas.slice();

//Inserindo novas pessoas no Array cópia
novasPessoas.push(inserirPessoas("Lucas",33));

console.log(pessoas);
console.log(novasPessoas);