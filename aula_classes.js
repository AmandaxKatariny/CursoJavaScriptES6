class List { // Classe Pai
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}
//Herança: Classe 'TodoList' herda as propriedades da Classe 'List'
class TodoList extends List {
    constructor() {
        super(); //Chama o Construct da classe Pai

        this.usuario = 'Amanda';
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();