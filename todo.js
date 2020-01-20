

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
            this.displayTodos();
        },
        changeTodo: function(position, newTodoText = 'blank') {
            this.todos[position].todoText = newTodoText;
            this.displayTodos();
        },
        deleteTodo: function(position) {
            this.todos.splice(position);
            this.displayTodos();
        },
        toggleCompleted: function(position) {
            this.todos[position].isCompleted = !this.todos[position].isCompleted;
            this.displayTodos();
        },
        toggleAll: function() {
            // if everything is true, make everything false
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
                this.displayTodos();
            // otherwise make everything true
        }
};