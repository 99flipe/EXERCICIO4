//SUBA O DESAFIO NO GITHUB E ENTREGUE O LINK DO CÓDIGO AQUI, (NÃO PRECISA COLOCAR ONLINE)


//1 - crie uma função que exiba uma mensagem no console
function oi(){
    console.log("Fora bolsonaro corno")
}
oi()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome(nome){
    console.log(`Olá, ${nome}`)
}
exibirNome("Felipe")

//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console
function dados (nome, nascimento, estilomusical){
    console.log(`O seu nome é ${nome}, seu ano de nascimento é ${nascimento} e seu estilo musical preferido é ${estilomusical}`)
}
dados("Felipe","1999","Drill/Grime")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function dadosFM (musica,artista,filme, ano){
    console.log(`A musica "${musica}", do(s) artista(s) ${artista}, foi escolhida para integrar a trilha sonora do filme ${filme} no ano de ${ano}`)
}
dadosFM("All the Stars", "Kendrick Lamar & SZA", "Pantera Negra", "2018")

//Bônus
//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function equacao(numero){
    return numero*3
}
console.log(equacao(10))
