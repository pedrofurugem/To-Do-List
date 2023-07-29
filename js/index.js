const buttonAddTask = document.getElementById("addTask")
const inputTask = document.getElementById("taskInput")
const listTask = document.getElementById("taskList")

console.log(buttonAddTask)
console.log(inputTask)
console.log(listTask)

list = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask(item){
    list.push(item)
    salveTaskLocalStorage()
    renderTaskList()
}

function removeTask(index){
    list.splice(index, 1)
    salveTaskLocalStorage()
    renderTaskList()
}

function salveTaskLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(list))
}

function renderTaskList(){
    listTask.innerHTML = ''
    list.forEach((task, index)=> {
        const li = document.createElement('li')

        const taskText = document.createElement('span')
        taskText.textContent = task

        const excluir = document.createElement('span')
        excluir.textContent = ' Excluir'
        excluir.classList.add('excluir-tarefa')
        excluir.addEventListener('click', ()=> {
            removeTask(index)
        })
        li.appendChild(taskText)
        li.appendChild(excluir)
        listTask.appendChild(li)
    })
}

buttonAddTask.addEventListener('click', ()=> {
    const task = inputTask.value
    if(task === ''){
        return;
    }else {
        addTask(task)
        inputTask.value = ''
    }
})

renderTaskList()