const divs = document.querySelectorAll('.downChild');
const newdivs = [...divs];

// تابعی برای تغییر رنگ تگ‌ها به همراه تغییر تصویر
function changeColorAndImage(index) {
    // حذف کلاس 'yellow-bg' از همه تگ‌ها
    divs.forEach((item) => {
        item.style.background = "white";
    });

    // افزودن کلاس 'yellow-bg' به تگ کلیک شده
    newdivs[index].style.background = "#f9d342";

    // تغییر تصویر به مطابق با اندیس تگ کلیک شده
    showImage(index);
}
// بخش جاوااسکریپت

// لیست تصاویر
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let currentImageIndex = 0; // ایندکس تصویر فعلی

// ایکون‌ها
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const sliderImage = document.getElementById("sliderImage");

// تابعی برای نمایش تصویر با ایندکس داده شده با انیمیشن
function showImage(index) {
    sliderImage.style.animation = "none"; // حذف انیمیشن فعلی
    setTimeout(() => {
        sliderImage.src = images[index];
        currentImageIndex = index;
        sliderImage.style.animation = "imageChange 1s ease-in-out"; // اجرای انیمیشن تغییر تصویر
    }, 10);
}

showImage(currentImageIndex);



newdivs.forEach((e, index) => { // اضافه کردن اندیس به تگ‌ها
    e.addEventListener('click', () => {
        changeColorAndImage(index); // تغییر رنگ و تصویر به هنگام کلیک بر روی تگ‌ها
    });
});

// آیکون چپ
prevButton.addEventListener("click", () => {
    // تغییر تصویر به تصویر قبلی
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeColorAndImage(currentImageIndex); // تغییر رنگ و تصویر به هنگام کلیک بر روی آیکون چپ
});

// آیکون راست
nextButton.addEventListener("click", () => {
    // تغییر تصویر به تصویر بعدی
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeColorAndImage(currentImageIndex); // تغییر رنگ و تصویر به هنگام کلیک بر روی آیکون راست
});