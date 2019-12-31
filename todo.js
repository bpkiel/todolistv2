

let todoList = {
    todos: [],
        displayTodos: function() {
            console.log(this.todos);
        },
        addTodo: function(todo) {
            this.todos.push({
                todoText: todo,
                isCompleted: false
            });
        },
        changeTodo: function(position, newTodoText) {
            this.todos[position].todoText = newTodoText;
        },
        deleteTodo: function(position) {
            this.todos.splice(position);
        },
        toggleCompleted: function(position) {
            this.todos[position].isCompleted = !this.todos[position].isCompleted;
            // let todo = this.todos[position];
            // todo.isCompleted = !todo.isCompleted;
        }
};