/*
const a = 1; // A "const"= constante, não pode ter seu valor re-atribuido
a = 3; // Error: "a" is read-only
*/

//Mutar Variavel - A mutação é possivel dentro de uma constante
/*
const usuario = { nome: 'Katariny' };
usuario.nome = 'Amanda';
console.log(usuario)
*/

//Variaveis de Escopo = seria oque esta dentro das chaves '{}' , cada chave seria um escopo

function teste(x) {
    let y = 2;
    if (x > 5) {
        let y = 4; // o valor de y foi re-atribuido
        console.log(x, y);
    }
}

//console.log(y); //O escopo do console não é o mesmo onde y está declarado - ReferenceError: y is not defined
teste(10)