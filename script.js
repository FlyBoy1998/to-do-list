const listInput = document.getElementById('to-do-input');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.querySelector('.remove-task-btn');
const listContainer = document.getElementById('list-container');



function addTask(e) {
    e.preventDefault();
    if(!listInput.value) {
        alert('Please enter a task');
    } else {
        const taskValue = listInput.value;
        const task = document.createElement('li');
        task.innerHTML = `
           <i class="fa-solid fa-circle"></i>
                    <p>${taskValue}</p>
                    <button class="remove-task-btn"><i class="fa-solid fa-circle-xmark"></i></button>`;
        listContainer.appendChild(task);
        listInput.value = '';
    }
    
}

addBtn.addEventListener('click', addTask);
removeBtn.addEventListener('click', removeTask);