const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');
const taskCount = document.getElementById('all-count');

const activeCount = 0;
const completedCount = 0;

addButton.addEventListener('click', () => {
    
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const listItem = document.createElement('li');
        console.log('Adding todo item:', todoText);
        listItem.textContent = todoText;
        todoList.appendChild(listItem);
        todoInput.value = '';
        const actualTaskCount = todoList.querySelectorAll('li:not(#task-template)').length;
        taskCount.textContent = actualTaskCount;
    }
});