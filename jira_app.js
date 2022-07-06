var btn = document.querySelector('#btn')
btn.onclick=function() {
    var div1= document.createElement('div');
    div1.setAttribute('id', generator())
    div1.innerHTML= generate();
    document.getElementById('Todo').appendChild(div1)

}
function generate(){
    return "<textarea placeholder='enter the task to be done?' name='w3review' rows='4' cols='50'></textarea><button onclick='push()'>+</button>";
}
function generator() {
    var id = Math.ceil(Math.random()*1000);
    return id;
}
function push(){
    // var elem = document.getElementById(ird);
    document.getElementById('In_Progress').appendChild(document.getElementById('Todo'))
}