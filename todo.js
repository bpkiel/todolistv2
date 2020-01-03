

let todoList = {
    todos: [],
        displayTodos: function() {
            if (this.todos.length > 0) {
                console.log(this.todos);
            } else {
                console.log('no todos');
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
            this.todos.splice(position);
        },
        toggleCompleted: function(position) {
            this.todos[position].isCompleted = !this.todos[position].isCompleted;
        }
};