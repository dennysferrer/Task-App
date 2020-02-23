document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    const task = {
        title: title,
        description: description
    };

    localStorage.setItem('task', JSON.stringify(task));

    e.preventDefault();
}


