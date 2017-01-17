const add_items = document.querySelector('.add-items');
const items_list = document.querySelector('.plates');
const actions = document.querySelector('.actions');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();

    const input = this.querySelector('input[type="text"]');

    items.push({text: input.value, checked: true,});

    makeList(items, items_list);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
    input.focus();
}

function checkItem(e) {
    if (!e.target.matches('input'))
        return;
    const index = e.target.dataset.index;
    items[index].checked = !items[index].checked;
    localStorage.setItem('items', JSON.stringify(items));
    makeList(items, items_list);
}

function makeList(data, list) {
    const items = data.map((item, i) => {
        return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${item.checked
            ? 'checked'
            : ''}>
        <label for="item${i}">${item.text}</label>
      </li>
    `;
    }).join('');

    list.innerHTML = items;
}

function checkAll() {
    items.forEach(item => item.checked = true);
}

function uncheckAll() {
    items.forEach(item => item.checked = false);
}

function removeAll() {
    items = [];
}

function listAction(e) {
    if (!e.target.matches('button')) return;
    switch (e.target.dataset.action) {
        case 'checkAll':
            checkAll();
            break;
        case 'uncheckAll':
            uncheckAll();
            break;
        case 'removeAll':
            removeAll();
            break;
    }
    localStorage.setItem('items', JSON.stringify(items));
    makeList(items, items_list);
}

items_list.addEventListener('click', checkItem);
add_items.addEventListener('submit', addItem);
actions.addEventListener('click', listAction);

makeList(items, items_list);
