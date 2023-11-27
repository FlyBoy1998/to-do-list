const listInput = document.getElementById('to-do-input');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container');

function addTask(e) {
    e.preventDefault();
    if(!listInput.value) {
        alert('Please enter a task');
    } else {
        const taskValue = listInput.value;
        const task = document.createElement('li');
        task.setAttribute('class', 'list-task');
        const checkCircle = document.createElement('i');
        checkCircle.setAttribute('class', 'fa-solid fa-circle');
        const listContent = document.createElement('p');
        listContent.setAttribute('class', 'list-text');
        listContent.textContent = taskValue;
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'remove-task-btn');
        const removeBtnIcon = document.createElement('i');
        removeBtnIcon.setAttribute('class', 'fa-solid fa-xmark');
        
        removeBtn.appendChild(removeBtnIcon);
        task.append(checkCircle, listContent, removeBtn);
        listContainer.appendChild(task);
        listInput.value = '';
        saveItems();
    }
}

// Save Items in localStorage
function saveItems() {
    localStorage.setItem('tasks', listContainer.innerHTML)
}

// Fill DOM based on localStorage
function showItems() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}

window.addEventListener('load', showItems);
addBtn.addEventListener('click', addTask);
listContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
        saveItems();
    } else if (e.target.classList.contains('remove-task-btn')) {
        e.target.parentElement.remove();
        saveItems()
    } else if(e.target.tagName === 'LI'){
        e.target.firstChild.classList.toggle('checked');
        e.target.firstChild.nextElementSibling.classList.toggle('checked');
        saveItems();
    } else if(e.target.classList.contains('list-text')) {
        e.target.classList.toggle('checked');
        e.target.previousElementSibling.classList.toggle('checked');
    } else if(e.target.classList.contains('fa-circle')){
        e.target.classList.toggle('checked');
        e.target.nextElementSibling.classList.toggle('checked');
    }

})