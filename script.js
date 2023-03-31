/*
// SUBSTITUINDO PALAVRAS
 let txt = "estão chegando as provas"
 console.log(txt.replace("provas", "avaliações"));
 // Apresentando valores depois virgula

 let num = 274.1264
 document.write(num.toFixed(2));
 document.write("<br><br>")

 let num2 = 123.4567
 document.write(num2.toPrecision(3))
 document.write("<br><br>")
*/
 //caixa de alertas

    //alert("Olá mundo")

 //caixa de confirmação

    //let teste=confirm("Você é um aluno?")
    //document.write(" o resultado é:", teste)

 //caixa de prompt
    //let texto= prompt("digite seu nome:")
    //document.write("O nome dele é: ", texto)

    /*
 //if e else
 if(20 < 10){
    document.write("O valor 20 é maior que 10")
}
 else{
    document.write("O valor 20 não é maior que 10")
    document.write("<br><br>")
}

//IF ELSE declarando variavel
let valor = 10
if (valor > 7){
    document.write("O valor é maior que 7")
}  
else{
    document.write("O valor é menor que 7")
}
*/

/*
//if e else encadeado
let idade = 51

if (idade <= 12){
    document.write("É uma criança")
}
else if(idade <=17){
    document.write("É um adolescente")
}
else if(idade <=50){
    document.write("É um adulto")
}
else{
    document.write("É um idosinho")
}
*/

/*
//desafio de festa
let idade = prompt("Digite sua idade:")

if (idade >= 50){
    document.write("Netflix e boa")
}
else if (idade >= 20){
    document.write("Balada Madruga")
}
else if(idade >=18){
    document.write("Balada Noturna")
}
else if(idade >=14){
    document.write("Balada Matine")
}
else if(idade >=10){
    document.write("Balada Kids")
}
*/

//&& 'e'
let valor = 15
if (valor > 10 && valor < 20){
    document.write("Este valor é valido")
    document.write("<br><br>")
}

// || 'ou'
let valor1 = 25
if(valor1 < 20 || valor1 > 20){
    document.write("O valor é verdadeiro")
}
else{
    document.write("O Valor é falso")
}