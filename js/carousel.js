const track = document.querySelector('.carousel_track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel_button-right')
const prevButton = document.querySelector('.carousel_button-left')

const slideSize = slides[0].getBoundingClientRect()
const slideWidth = slideSize.width

const setSlidePositon = (slide, index) => {
    slide.style.left = slideWidth * index * 1.5 + 'px'
}

slides.forEach(setSlidePositon)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current_slide')
    targetSlide.classList.add('current_slide')
}

nextButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current_slide')
    const targetSlide = currentSlide.nextElementSibling

    moveToSlide(track, currentSlide, targetSlide)
})

prevButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current_slide')
    const prevSlide = currentSlide.previousElementSibling

    moveToSlide(track, currentSlide, prevSlide)
})
