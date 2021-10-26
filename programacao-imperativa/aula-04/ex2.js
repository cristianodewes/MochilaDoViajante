let nome = "Cristiano";
let idade = prompt("Digite a sua idade");
let maiorDeIdade = idade>=18;



console.log(nome);
console.log(idade);
console.log(maiorDeIdade);

if(maiorDeIdade) {
    console.log("O " + nome + " é maior de idade");
} else {
    console.log("O " + nome + " é menor de idade");
}