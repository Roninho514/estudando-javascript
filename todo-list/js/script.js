//localização

const formAddTodo = document.querySelector("#task-form");
const inputTodoAdd = document.querySelector("#todo-input");
const listTodo = document.querySelector("#listTodo");
const editTodoForm = document.querySelector("#edit-todo-form"); 
const cancelEditButton = document.querySelector("#edit-form-button-cancel");
const editTodoInput = document.querySelector("#edit-todo-item");
const filterInput = document.querySelector("#searchInput");
const ereaseButton = document.querySelector("#erase-button");
const selectFilterButton = document.querySelector("#filter-select");
let oldInputEdit;
//Evento

formAddTodo.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(inputTodoAdd.value == "") return
    this.addTodo(inputTodoAdd.value);
});

editTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    togleForms();
    if(editTodoInput.value == "") return
    editTodo(editTodoInput.value);
});

document.addEventListener('click', (e) =>{
    const eTarget =  e.target;
    const closeETarget = eTarget.closest('div');
    let titleItemTodo;

    if(closeETarget && closeETarget.querySelector('h3')){
        titleItemTodo = closeETarget.querySelector('h3').innerText;
    }

    if(eTarget.classList.contains('finish-todo')){
        closeETarget.classList.toggle("done");
        updateTodoStatusLocalStorage(titleItemTodo);
    }

    if(eTarget.classList.contains('remove-todo')){
        closeETarget.remove();
        removeTodoLocalStorage(titleItemTodo);
    }

    if(eTarget.classList.contains('edit-todo')){
        togleForms();
        editTodoInput.value  = titleItemTodo;
        oldInputEdit = titleItemTodo;
    }
});

cancelEditButton.addEventListener('click', (e)=>{
    e.preventDefault();
    togleForms();
});

filterInput.addEventListener('keyup', (e) => {
    const searchFilter = e.target.value;
    filterTodo(searchFilter);
});

ereaseButton.addEventListener('click', (e) => {
    e.preventDefault();
    filterInput.value = "";
    filterInput.dispatchEvent(new Event("keyup"));
});

selectFilterButton.addEventListener('change', (e) => {
    const searchFilterSelect = e.target.value;
    selectFilter(searchFilterSelect);
});

//função

function addTodo(text, done = 0, save = 1){
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const title = document.createElement("h3");
    title.innerText = text;
    todo.appendChild(title);

    const buttonFinished = document.createElement("button");
    buttonFinished.classList.add("finish-todo");
    buttonFinished.innerHTML = `<i class="fa-solid fa-check"></i>`;
    todo.appendChild(buttonFinished);

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("edit-todo");
    buttonEdit.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    todo.appendChild(buttonEdit);

    const buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove-todo");
    buttonRemove.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    todo.appendChild(buttonRemove);

    if(done){
        todo.classList.add("done");
    }

    if(save) {
        saveTodoLocalStorage({text, done});
    }

    listTodo.appendChild(todo);
    inputTodoAdd.value = ""
    inputTodoAdd.focus();
}

const togleForms = () => {
    listTodo.classList.toggle('hide');
    editTodoForm.classList.toggle('hide');
    formAddTodo.classList.toggle('hide');
}

const editTodo = (text) => {
    const todos = document.querySelectorAll('.todo');
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3');
        if(todoTitle.innerText === oldInputEdit){
            todoTitle.innerText = text;
            updateTodoLocalStorage(oldInputEdit, text);
        }
    });
}

const filterTodo = (search) => {
    const searchLower = search.toLowerCase();
    const todos = document.querySelectorAll('.todo');
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3').innerText.toLowerCase();
        todo.style.display = "flex";
        if(!todoTitle.includes(searchLower)){
            todo.style.display = "none";
        }
    });
}

const selectFilter = (serch) => {
    const todos = document.querySelectorAll('.todo');
    switch (serch) {
        case 'all':
            todos.forEach((todo) => (todo.style.display = 'flex'));
            break
        case 'done':
            todos.forEach((todo) => todo.classList.contains("done") 
            ? todo.style.display = "flex"
            : todo.style.display = "none");
            break
        case 'todo':
            todos.forEach((todo) => !todo.classList.contains("done") 
            ? todo.style.display = "flex"
            : todo.style.display = "none");
            break
        default:
            break
    }
}

//local Storage

const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
}

const loadTodos = () => {
    const todos = getTodosLocalStorage();
    todos.forEach ( (todo) => {
        addTodo(todo.text, todo.done, 0);
    })
}

const saveTodoLocalStorage = (todo) => {
    const todos = getTodosLocalStorage();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const removeTodoLocalStorage = (textTodo) => {
    const todos = getTodosLocalStorage();
    const filteredTodo = todos.filter((todo) => todo.text !== textTodo);
    localStorage.setItem("todos", JSON.stringify(filteredTodo));
}

const updateTodoStatusLocalStorage = (textTodo) => {
    const todos = getTodosLocalStorage();
    todos.map((todo) => todo.text === textTodo ? (todo.done = !todo.done) : null);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const updateTodoLocalStorage = (todoOldText,todoNewText) => {
    const todos = getTodosLocalStorage();
    todos.map((todo) => todo.text === todoOldText ? (todo.text = todoNewText) : null);
    localStorage.setItem("todos", JSON.stringify(todos));
}

loadTodos();