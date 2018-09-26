let rowIndex = 0;
const list = document.getElementById('list');

function createRowData() {
    const formElements = document.getElementById("form_1").elements;
    if (validateEmail(formElements.email.value)) {
        let newRow = {
            id: ++rowIndex,
            time: new Date().toLocaleString()
        };
        for (const formControl of formElements) {
            newRow[formControl.name] = formControl.value;
        }
        createTableElem(newRow);
    }

}

function createTableElem(data) {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.id = 'list-item__' + data.id;
    li.innerHTML = `<span class="list-item__info">${data.name}</span>
                    <span class="list-item__info">${data.lastname}</span>
                    <span class="list-item__info list-item__info--email">${data.email}</span>
                    <span class="list-item__info">${data.time}</span>
    
                    <div class="list-item-controls">
                        <input type="checkbox" value="${data.id}" class="list-item-controls__checkbox">
                        <button class="list-item-controls__delete" onclick="deleteRow(${data.id})">del</button>
                    </div>`;
    list.appendChild(li);
}

function deleteRow(id) {
    list.removeChild(document.getElementById('list-item__' + id));
}

function deleteCheckedRows() {
    let checkboxes = Object.values(document.getElementsByClassName('list-item-controls__checkbox'));
    checkboxes.filter(item => item.checked).map((item) => {
        list.removeChild(document.getElementById('list-item__' + item.value));
    });
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return (true);
    alert("You have entered an invalid email address!");
    return (false)
}