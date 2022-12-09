let galleryImg = document.querySelectorAll("img");
let getlatestopenedimg;
let windowwith = window.innerWidth;

if (galleryImg) {
    galleryImg.forEach(function (image) {
        image.onclick = function () {
            let getelementCss = window.getComputedStyle(image);
            let getallImagUrl = getelementCss.getPropertyValue();
        };
    });
}
