var btn = document.querySelector('#button');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    var obj = {
        expense: document.querySelector('#expense').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
    }
    var uniqueKey = Date.now().toString();
    localStorage.setItem(uniqueKey, JSON.stringify(obj));

    var ul = document.querySelector('#dataStored');
    var li = document.createElement('li');

    var deleteBtn = document.createElement('button');
    deleteBtn.id = "deleteButton";
    deleteBtn.className = "deleteButton";
    deleteBtn.appendChild(document.createTextNode('Delete'));

    var editBtn = document.createElement('button');
    editBtn.id = "editButton";
    editBtn.className = "editButton";
    editBtn.appendChild(document.createTextNode('Edit'));

    deleteBtn.addEventListener('click', function() {
        deleteBtn.parentElement.remove();
        localStorage.removeItem(uniqueKey);
    });

    editBtn.addEventListener('click', function(){
        editBtn.parentElement.remove();
    })


    var textContent = obj.expense + "-" + obj.description + "-" + obj.category;
    li.textContent = textContent;
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
});


