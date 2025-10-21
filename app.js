const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');
const taskCount = document.getElementById('all-count');

addButton.addEventListener('click', () => {
    
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const listItem = document.createElement('li');
        console.log('Adding todo item:', todoText);
        listItem.textContent = todoText;
        todoList.appendChild(listItem);
        todoInput.value = '';
        taskCount.textContent = `${todoList.children.length}`;
    }
});
