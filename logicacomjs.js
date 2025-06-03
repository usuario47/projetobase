/*let number1 = 40
let number2 = 50
let som1 = number1+number2
let som2 = number1-number2
let som3 = number1/23*number2
let som4 = number1*number2
console.log ("a soma é: "+som1)
console.log("a subtração é: " +som2)
console.log("a divisão é: "+som3)   
console.log("a mutiplicação é:" +som4)
let salario = 1518
let mestrab = 13;
let nome = "Richard";
let decimo = salario/12*mestrab
console.log("Parabéns "+nome+ "seu 13° é R$"+decimo)
let nm = prompt ("seu nome é:")
let salario = prompt ("digite seu salario: ")
let meses = prompt("seus messes trabalhados:")
let dec = salario/12*meses
alert (nm+ "seu décimo 13 é" + dec.toFixed(1) + "R$" )*/
/*let porcetagem = 5/100*dinheiro
var dinheiro = prompt(" seu salario é")
if(dinheiro<500*){
    alert ("seu novo salario é:")
}
let idade = prompt("qual sua idade?")
    if(idade <=12) { 
        alert ("assista conteúdo infantil")
    }
    else if (idade>=12 && idade <=17) {
        alert ("Assista contéudo jovem")
    }
    else if(idade>=18 && idade<=60) {
        alert("assista conteúdo adulto")
    }
    else{ 
        alert("Assista conteúdo sênior")
    }
   let pontuacao = prompt("sua pontuação é?")
if(pontuacao<=1000){
    alert("seu Bônus de exp é 100")
}
else if(pontuacao >=1001 && pontuacao <=5000) {
    alert("seu bônus de xp é 500")
}
else if(pontuacao >=5001 && pontuacao <=10000) {
    aler("seu bônus de xp é 1000")
}*/
let basico = 25
let premium = 40 
let Ultra = 60
let tela1 = 3 
let tela2 = 4
let tela3 = 5
let assinatura = prompt ("qual tipo de assinatura ")  
let tela = prompt ("quantas telas simultâneas Acréscimo por tela ")
if(assinatura == "basico") { 
     if(tela >=1 &&  tela <=2 ){
    alert("seu plano terá o valor de"+basico+"R$" )
    }
}
    else if(assinatura == "premium") if (tela >=3 && tela <=4 ){
        alert(" seu plano tera o valor de"+(premium+tela1)+"R$" )
}
    else{
     alert(" seu plano terá o valor de"+basico+"R$")
    }