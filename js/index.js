const btnAdd = document.getElementById('taskButton')
const inputTask = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

console.log(btnAdd)
console.log(inputTask)
console.log(taskList)

list = []

function addTask(item){
    list.push(item)
    renderList()
}

function removeTask(index){
    list.splice(index, 1)
    renderList()
}

function renderList(){
    taskList.innerHTML = '';
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
        taskList.appendChild(li)
    })
}

btnAdd.addEventListener('click', ()=> {
    const task = inputTask.value
    if(task !== ''){
        addTask(task)
        inputTask.value = '';
    }
})