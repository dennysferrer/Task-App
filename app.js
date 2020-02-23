document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    const task = {
        title: title,
        description: description
    };

    if (localStorage.getItem('tasks') === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    e.preventDefault();
}

function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    for (i=0; i < tasks.length; i++){
        let title = tasks[i].title;
        let description = tasks[i].description;
        tasksView.innerHTML += "<div class="card">"
            "<div class="card-body">"
                "<p>${title} - ${description}</p>"
                "<a class="btn btn-danger"></a>"
            "</div>"
        "</div>";
    }
}

getTasks();
