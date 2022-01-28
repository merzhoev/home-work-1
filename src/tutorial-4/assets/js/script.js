let tasks = ['task #1', 'task #2', 'task #3'];

const taskContent = document.querySelector('.task-content');
const btnAdd = document.querySelector('.btn-add');
const input = document.querySelector('input');

function render(tasks) {
  taskContent.innerHTML = '';

  tasks.forEach((currentTask, index) => {
    const task = document.createElement('li');
    task.classList.add('task')
    task.innerText = `${currentTask} `;

    const btnDel = document.createElement('button');
    btnDel.classList.add('btn-del');
    btnDel.innerText = 'X';
    btnDel.addEventListener('click', () => handleClickRemove(index));

    task.appendChild(btnDel);

    taskContent.appendChild(task);
  });
}

function handleClickAdd() {
  tasks.push(input.value);
  input.value = '';

  render(tasks);
}

function handleClickRemove(index) {
  tasks.splice(index, 1);

  render(tasks);
}

document.addEventListener('DOMContentLoaded', () => render(tasks));
btnAdd.addEventListener('click', handleClickAdd);