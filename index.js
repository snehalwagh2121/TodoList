const form= document.querySelector('.addTodo');
const todos= document.querySelector('.todos');
const search=document.querySelector('.search');

// TO add a new TODO
function addTodo(value){
    const html = `<li class="todo"><span class="task">${value}
    </span><i class="fa fa-trash delete" aria-hidden="true"></i></li>
    `
    todos.innerHTML +=html;
}
form.addEventListener('submit', e =>{
    e.preventDefault();

    const newTodo=form.newTodo.value.trim();
    if(newTodo.length>0){
        addTodo(newTodo);
    }
    form.reset();
})

//to delete a todo
todos.addEventListener('click', e=>{
    if(e.target.classList.contains('delete'))
        e.target.parentElement.remove();
})

//to search among todo's
const filterTodos=items=>{
    Array.from(todos.children)
        .filter((todo)=> !todo.textContent.toLowerCase().includes(items))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(todos.children)
        .filter((todo)=> todo.textContent.toLowerCase().includes(items))
        .forEach(todo => todo.classList.remove('filtered'));
}
search.addEventListener('keyup', e=>{
    const item= e.target.value.toLowerCase().trim();
    filterTodos(item);
})


