// const source = document.querySelector('.source');
// const target = document.querySelector('.target');

// source.addEventListener('dragstart', (e)=>{
//     e.dataTransfer.setData('text/plain', e.target.id)
// })
// target.addEventListener('dragover', (e)=>{
//     e.preventDefault();
// })
// target.addEventListener('drop', (e)=>{
//     e.preventDefault();
//     const sourceId = e.dataTransfer.getData('text/plain')
//     e.target.appendChild(document.getElementById(sourceId))
// })

const todos = document.querySelectorAll('.todo');
const all_status = document.querySelectorAll('.status');
let draggableItem = null;
todos.forEach((todo)=>{
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);

    localStorage.setItem('Jira', JSON.stringify(todo_form));
});
function dragStart(){
    draggableItem = this;
    console.log('test')

    localStorage.setItem('Jira', JSON.stringify(todo_form));
}
function dragEnd(){
    draggableItem = null;
    console.log('testEnd')

    localStorage.setItem('Jira', JSON.stringify(todo_form));
}
all_status.forEach((status)=>{
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('drop', dragDrop);

    localStorage.setItem('Jira', JSON.stringify(todo_form));
})
function dragOver(e){
    e.preventDefault();
    // console.log('testing')

    localStorage.setItem('Jira', JSON.stringify(todo_form));
}
function dragEnter(){
    this.style.border = '1px dashed #ccc3'
    console.log('testing1')

    localStorage.setItem('Jira', JSON.stringify(todo_form));
}
function dragLeave(){
    this.style.border = 'none'
    console.log('testing2')

    localStorage.setItem('Jira', JSON.stringify(todo_form));
}
function dragDrop(){
    this.style.border = 'none'
    this.appendChild(draggableItem);
    console.log('drop')

    localStorage.setItem('Jira', JSON.stringify(todo_form));
}

const btns = document.querySelectorAll("[data-target-modal]");
const close_btn = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector("#overlay");

btns.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        document.querySelector(btn.dataset.targetModal).classList.add("active");
        overlay.classList.add("active");
    });
    localStorage.setItem('Jira', JSON.stringify(todo_form));
});

close_btn.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove("active");
    });
    localStorage.setItem('Jira', JSON.stringify(todo_form));
});

window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            modal.classList.remove("active")
            overlay.classList.remove("active")
        })
    }
    localStorage.setItem('Jira', JSON.stringify(todo_form));
}

const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener('click', createTodo);

function createTodo() {
    const todo_div = document.createElement('div');
    const input_val = document.getElementById('todo_input').value;
    const txt = document.createTextNode(input_val);

    todo_div.appendChild(txt);
    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");
    todo_div.setAttribute("id", generator())
    
    console.log(todo_div);
    
    const span = document.createElement('span');
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);

    todo_div.appendChild(span);

   no_status.appendChild(todo_div);

   todo_form.classList.remove("active");
   overlay.classList.remove("active");

   todo_div.addEventListener('dragstart', dragStart);
   todo_div.addEventListener('dragend', dragEnd);

   localStorage.setItem('Jira', JSON.stringify(todo_form));
} 
localStorage.setItem('Jira', JSON.stringify(todo_form));
function generator() {
    var id = Math.ceil(Math.random()*1000);
    return 'todo'+id;
}
const theStorage = localStorage.getItem('Jira');
if(theStorage){
    const red = JSON.parse(theStorage);
    if (red && Array.isArray(red) && red.length) {
        todo_form = red;
    }
}
