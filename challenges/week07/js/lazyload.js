const images = document.querySelectorAll("[data-src]");

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
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


images.forEach(image => {
    imgObserver.observe(image);
})