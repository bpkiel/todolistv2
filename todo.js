

let toggleAllBtn = document.getElementById('js-toggle-all');
let addTodoBtn = document.getElementById('js-add-todo');
let changeTodoBtn = document.getElementById('js-change-todo');
let deleteTodoBtn = document.getElementById('js-delete-todo');
let toggleCompletedBtn = document.getElementById('js-toggle-completed');
let todosList = document.getElementById('js-todo-list');

//handler functions:

const toggleAll = () => {
    todoList.toggleAll();
    displayTodos();
};

const addTodo = () => {
    let todoText = document.getElementById('js-add-todo-input');
    todoList.addTodo(todoText.value);
    todoText.value = '';
    displayTodos();
};

const changeTodo = () => {
    let newTodoPosition = document.getElementById('js-change-todo-position');
    let newTodoText = document.getElementById('js-change-todo-text');
    todoList.changeTodo(newTodoPosition.valueAsNumber, newTodoText.value);
    newTodoPosition.value = '0';
    newTodoText.value = 'insert new todo';
    displayTodos();
};

const deleteTodo = () => {
    let toDeletePosition = document.getElementById('js-delete-todo-position');
    todoList.deleteTodo(toDeletePosition.value);
    displayTodos();
};

const toggleCompleted = () => {
    let togglePosition = document.getElementById('js-toggle-completed-position');
    todoList.toggleCompleted(togglePosition.value);
    displayTodos();
};

const displayTodos = () => {
    todosList.innerHTML = '';
    for (let i = 0; i < todoList.todos.length; i++) {
        let todoLi = document.createElement('li');
        todosList.appendChild(todoLi);
        todoLi.id = i;
        if (todoList.todos[i].isCompleted === true) {
            todoLi.textContent = '(x) ' + todoList.todos[i].todoText;
        } else {
            todoLi.textContent = '( ) ' + todoList.todos[i].todoText;
        }

        todoLi.appendChild(createDeleteButton());
    }
};

const createDeleteButton = () => {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    return deleteButton;
}

toggleAllBtn.addEventListener('click', toggleAll);
addTodoBtn.addEventListener('click', addTodo);
changeTodoBtn.addEventListener('click', changeTodo);
deleteTodoBtn.addEventListener('click', deleteTodo);
toggleCompletedBtn.addEventListener('click', toggleCompleted);

let todoList = {
    todos: [],
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

