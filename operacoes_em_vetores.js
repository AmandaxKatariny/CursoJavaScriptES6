const arr = [1, 3, 4, 5, 8, 10];

//map: percorree o vetor e retorna um array com novas informações
const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

//reduce: consome o vetor e transforma em uma unica informação 
const sum = arr.reduce(function(total, next) {
    console.log({
        'total': total,
        'next': next
    })
    return total + next;
});

console.log('sum', sum);

//filter: filtra os dados e retorna apenas os dados desejados
const filter = arr.filter(function(item) {
    // %: operação de modulo, retorna o diferencial da divisão
    return item % 2 === 0 // retorna true ou false
});

console.log(filter)

//find: verifica de existe uma informação especifica no array
const find = arr.find(function(item) {
    return item === 4;
    //return item === 15; // return undefined
})
console.log(find)