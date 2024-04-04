let nomeA = "Ana"
let cor = 'Azul'
//console.log(`A cor preferida da ${nomeA} é ${cor}.`)
//console.log("A cor preferida da " + nomeA + " é " + cor)


let frase = 'ana gosta de chocolate.'
let fraseMaiuscula = frase.toUpperCase()
let novaFrase = frase.replaceAll("o", "i")
//console.log(frase.toUpperCase())
//console.log(frase.length)
//console.log(frase.replaceAll("o", "i"))

const readlineSync = require('readline-sync');

const numero = readlineSync.question("Escolha a raca pelo numero!");
const racas = ['Golden', 'Spitz', 'Pincher', 'SRD', 'Labrador']
const escolha = racas[numero]
console.log(numero)
console.log('Raça:' + escolha)

