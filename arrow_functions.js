//Arrow Functions
const arr = [1, 3, 4, 5, 6];

//Arrow pode ser usanda em ambiete de função anônima
const newArr = arr.map(item => item * 2);
console.log(newArr)

const teste = () => ({ nome: 'Amanda' })

console.log(teste())


//passando valores padrão para os parametros
function soma_f(a = 3, b = 6) {
    return a + b;
}
console.log(soma_f(1))

//Arrow Function
const soma_af = (a = 3, b = 6) => a + b;
console.log(soma_af(1))