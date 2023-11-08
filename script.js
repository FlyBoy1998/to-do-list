const listInput = document.getElementById('to-do-input');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container');
const removeBtns = document.querySelectorAll('.remove-task-btn');

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
        listContent.textContent = taskValue;
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'remove-task-btn');
        const removeBtnIcon = document.createElement('i');
        removeBtnIcon.setAttribute('class', 'fa-solid fa-circle-xmark');
        removeBtn.appendChild(removeBtnIcon);
        task.append(checkCircle, listContent, removeBtn);
        listContainer.appendChild(task);
        listInput.value = '';
    }
}


removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const listTask = e.currentTarget.parentElement;
        listTask.remove();
    })
})

addBtn.addEventListener('click', addTask);