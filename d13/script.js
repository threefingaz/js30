function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
            };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
        };
}

const slide_images = document.querySelectorAll('.slide-in');

function slideIn(e) {
    slide_images.forEach(image => {
        const top = window.scrollY + window.innerHeight;
        const image_half = image.height / 2;
        const image_bottom = image.offsetTop + image.height;

        const trigger = top + image_half;
        const image_visible = image.offsetTop < trigger;
        const image_passed = image_bottom < window.scrollY;
        
        if (image_visible && !image_passed) {
            image.classList.add('active');
        } else {
            image. classList.remove('active');
        }
    });
}

document.addEventListener('scroll', debounce(slideIn));
