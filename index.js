// exercício 1

let nomeCompleto = "Amir Moufarrege";
    console.log(nomeCompleto);


// exercício 2

let numeroA= 4;
let numeroB= 3;
let resultado = numeroA * numeroB;

    console.log(resultado);


// exercício 3

function saudacao(){
    console.log('oi eu sou o Goku!');
}
    saudacao();


// exercício 4

    function multiplica(a,b){
        console.log(a*b)
        }
        multiplica(2,3);
    

// exercício 5

    function podeDirigir(){
        let idade = 19;
        if(idade>= 18){
            console.log("Você pode dirigir");}
            else{
                console.log("Voce não pode dirigir");}
            }
            
               podeDirigir(); 
    


// exercício 6

for (var i=0; i<=20;i++){
    console.log(i);
}



// exercício 7

for( var i=0 ;i <= 20; i++){
    if(i % 2 != 0){
console.log(i)}}



// exercício 8

function tabuada(num){
    for(var i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num *i}`);
}}
tabuada(3);



// exercício 9

    // let min = 150;
    function converterEmHoras(min){
        console.log( (min / 60) + " hora(s)");

    }
    
    converterEmHoras(150);