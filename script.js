document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('todo-text').value;
    if (todoText) {
        addTodo(todoText);
        document.getElementById('todo-text').value = '';
    }
});

function addTodo(text) {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = text;
    span.setAttribute('contenteditable', true);
    li.appendChild(span);
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    li.appendChild(completeButton);
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', function() {
        span.focus();
    });
    li.appendChild(editButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(deleteButton);
    
    document.getElementById('todo-list').appendChild(li);
    li.style.animation = 'fadeIn 0.5s ease-in-out';
}
