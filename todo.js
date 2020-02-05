
//handler functions:

const toggleAll = () => {
    todoList.toggleAll();
    todoList.displayTodos();
};

const displayTodos = () => {
    todoList.displayTodos();
};

const addTodo = () => {
    let todoText = document.getElementById('js-add-todo-input');
    todoList.addTodo(todoText.value);
    todoText.value = '';
    todoList.displayTodos();
};

const changeTodo = () => {
    let newTodoPosition = document.getElementById('js-change-todo-position');
    let newTodoText = document.getElementById('js-change-todo-text');
    todoList.changeTodo(newTodoPosition.valueAsNumber, newTodoText.value);
    newTodoPosition.value = '0';
    newTodoText.value = 'insert new todo';
    todoList.displayTodos();
};

const deleteTodo = () => {
    let toDeletePosition = document.getElementById('js-delete-todo-position');
    todoList.deleteTodo(toDeletePosition.value);
    todoList.displayTodos();
};

const toggleCompleted = () => {
    let togglePosition = document.getElementById('js-toggle-completed-position');
    todoList.toggleCompleted(togglePosition.value);
    todoList.displayTodos();
};


let todoList = {
    todos: [],
        displayTodos: function() {
            if (this.todos.length === 0) {
                console.log('You have no todos!');
            } else {
                console.log('My Todos:');
                for (let i = 0; i < this.todos.length; i++) {
                    if (this.todos[i].isCompleted === true) {
                        console.log(`(x) ${this.todos[i].todoText}`);
                    } else {
                        console.log(`( ) ${this.todos[i].todoText}`)
                    }
                }
            }
        },
        addTodo: function(todo = 'blank') {
            this.todos.push({
                todoText: todo,
                isCompleted: false
            });
        },
        changeTodo: function(position, newTodoText = 'blank') {
            this.todos[position].todoText = newTodoText;
        },
        deleteTodo: function(position) {
            this.todos.splice(position, 1);
        },
        toggleCompleted: function(position) {
            this.todos[position].isCompleted = !this.todos[position].isCompleted;
        },
        toggleAll: function() {
            let completedTodos = 0;
            let totalTodos = this.todos.length;

            for (let i = 0; i < totalTodos; i++) {
                if (this.todos[i].isCompleted === true) {
                    completedTodos++;
                }
            }

            if (completedTodos === totalTodos) {
                for (let i = 0; i < totalTodos; i++) {
                    this.todos[i].isCompleted = false;
                }
            } else {
                for (let i = 0; i < totalTodos; i++) {
                    this.todos[i].isCompleted = true;
                }
            }
        }
};

let displayTodosBtn = document.getElementById('js-display-todos');
let toggleAllBtn = document.getElementById('js-toggle-all');
let addTodoBtn = document.getElementById('js-add-todo');
let changeTodoBtn = document.getElementById('js-change-todo');
let deleteTodoBtn = document.getElementById('js-delete-todo');
let toggleCompletedBtn = document.getElementById('js-toggle-completed');

displayTodosBtn.addEventListener('click', displayTodos);
toggleAllBtn.addEventListener('click', toggleAll);
addTodoBtn.addEventListener('click', addTodo);
changeTodoBtn.addEventListener('click', changeTodo);
deleteTodoBtn.addEventListener('click', deleteTodo);
toggleCompletedBtn.addEventListener('click', toggleCompleted);





