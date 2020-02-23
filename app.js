document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){
    console.log(e);
    alert('Enviando formulario');
    e.preventDefault();
}
