// Get references to the necessary DOM elements
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

// Array to store the todo items
let todos = [];

// Function to render the todo list
function renderTodos() {
  // Clear the todo list
  todoList.innerHTML = '';

  // Render each todo item
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTodo(index);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

// Function to add a new todo
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    todos.push(todoText);
    todoInput.value = '';
    renderTodos();
  }
}

// Function to delete a todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Event listener for the "Add" button
addTodoButton.addEventListener('click', addTodo);

// Event listener for the Enter key
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

// Initial render of the todo list
renderTodos();