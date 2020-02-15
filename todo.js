
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

            this.todos.forEach(todo => {
                if (todo.isCompleted === true) {
                    completedTodos++;
                }
            });
            if (completedTodos === totalTodos) {
                this.todos.forEach(todo => {
                    todo.isCompleted = false;
                })
            } else {
                this.todos.forEach(todo => {
                    todo.isCompleted = true;
                })
            }
        }
};

let toggleAllBtn = document.getElementById('js-toggle-all');
let addTodoBtn = document.getElementById('js-add-todo');
let changeTodoBtn = document.getElementById('js-change-todo');
let toggleCompletedBtn = document.getElementById('js-toggle-completed');
let todosList = document.getElementById('js-todo-list');
let todosUl = document.querySelector('ul');


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

const deleteTodo = (position) => {
    todoList.deleteTodo(position);
    displayTodos();
};

const toggleCompleted = () => {
    let togglePosition = document.getElementById('js-toggle-completed-position');
    todoList.toggleCompleted(togglePosition.value);
    displayTodos();
};

const displayTodos = () => {
    todosList.innerHTML = '';
    todoList.todos.forEach((todo, position) => {
        let todoLi = document.createElement('li');
        todosList.appendChild(todoLi);
        todoLi.id = position;
        if (todo.isCompleted === true) {
            todoLi.textContent = '(x) ' + todo.todoText;
        } else {
            todoLi.textContent = '( ) ' + todo.todoText;
        }
        todoLi.appendChild(createDeleteButton());
    }, this)
};

const createDeleteButton = () => {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    return deleteButton;
};

toggleAllBtn.addEventListener('click', toggleAll);
addTodoBtn.addEventListener('click', addTodo);
changeTodoBtn.addEventListener('click', changeTodo);
toggleCompletedBtn.addEventListener('click', toggleCompleted);
todosUl.addEventListener('click', function(e) {
    let elementClicked = e.target;
    if (elementClicked.className === 'deleteButton') {
        deleteTodo(parseInt(elementClicked.parentNode.id));
    }
});
