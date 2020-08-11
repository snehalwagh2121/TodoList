const form= document.querySelector('.addTodo');
const todos= document.querySelector('.todos');

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

todos.addEventListener('click', e=>{
    if(e.target.classList.contains('delete'))
        e.target.parentElement.remove();
})