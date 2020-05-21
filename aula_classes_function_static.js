/* class TodoList {
    constructor() {
        this.todos = [];
    }

    //metodo estatico: passa uma informação e o retorno é idenpendente da classe
    static addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos)
    }
}
//ERROR : Uncaught TypeError: Cannot read property 'push' of undefined
TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
*/


///// Forma Correta
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}
console.log(Matematica.soma(1, 2))