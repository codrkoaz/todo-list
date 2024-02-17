//Selector

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listener

todoButton.addEventListener('click', addTodo);

// Function
function addTodo(event) {
  event.preventDefault();
  console.log('hello');
  // todo div
  const todoDiv = document.createElement('div');
  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-items');
  todoDiv.appendChild(newTodo);
  // Chcecked button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
}
