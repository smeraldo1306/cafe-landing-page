const reviewImgSlider = document.querySelector('.review-img-slider .review-img-slider-container')
const reviewItems = document.querySelectorAll('.review-img-slider-container .review-items')
const reviewItemsNavBtn = document.querySelectorAll('.review-img-slider-navigation button')
const reviewItemsFirst = document.querySelector('.review-img-slider-container .review-items.first')

let currentIndex = 1;
let prevIndex = 0;

function Default() {
    reviewItems[currentIndex].classList.add('zoomIn')
    reviewItems[currentIndex].classList.add('clearFilter')
    reviewItemsNavBtn[currentIndex].classList.add('buttonOpacity')

}

function zoomAndColorHandler() {
    reviewItems[prevIndex].classList.remove('zoomIn')
    reviewItems[prevIndex].classList.remove('clearFilter')
    reviewItems[currentIndex].classList.add('zoomIn')
    reviewItems[currentIndex].classList.add('clearFilter')
}

function scrollHandler() {
    reviewItemsFirst.classList.remove('scroll' + prevIndex)
    reviewItemsFirst.classList.add('scroll' + currentIndex)
}

function BtnHandler() {
    reviewItemsNavBtn[prevIndex].classList.remove('buttonOpacity')
    reviewItemsNavBtn[currentIndex].classList.add('buttonOpacity')
}

Default()

reviewItemsNavBtn.forEach(function(Btn, index) {
    Btn.addEventListener('click', function(){
        prevIndex = currentIndex
        currentIndex = index
        BtnHandler()
        scrollHandler()
        zoomAndColorHandler()
    })
})

