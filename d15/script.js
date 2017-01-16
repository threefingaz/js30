const add_items = document.querySelector('.add-items');
const items_list = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

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

items_list.addEventListener('click', checkItem);
add_items.addEventListener('submit', addItem);

makeList(items, items_list);
