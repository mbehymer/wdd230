const images = document.querySelectorAll("[data-src]");

const imageOptions = {
    threshold: 1
}

function preLoadImage(img) {
    const src = img.getAttribute("data-src")
    if (!src) {
        return;
    }

    img.src = src;
}

const imgObserver = new IntersectionObserver((elements,imgObserver) => {
    console.log(imgObserver);
    // imgObserver.delay = 1000;
    elements.forEach(image => {
        if (!image.isIntersecting) {
            return;
        }
        preLoadImage(image.target);
        imgObserver.unobserve(image.target);
    })

}, imageOptions);
window.addEventListener('scroll',(event) => {
    images.forEach(image => {
        imgObserver.observe(image);
    })
});