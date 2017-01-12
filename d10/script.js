const items = document.querySelectorAll('.item');

let last_check;

function check(e) {
    if (e.shiftKey) {
        let between = false;

        items.forEach(item => {
            if (item === this || item === last_check) {
                between = !between;
            }
            if (between) {
                item.querySelector('input').checked = true
            };
        });

    }
    last_check = this;
}

items.forEach(item => {
    item.addEventListener('click', check);
});
