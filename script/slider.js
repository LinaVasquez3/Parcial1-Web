var sliderImage = document.querySelector('.slider__image');
var sliderInput = document.querySelector('.slider__input');
function handleChangeImage () {
    var num = sliderInput.value;
    sliderImage.setAttribute('src', 'https://source.unsplash.com/' + num + 'x' + num);
}
sliderInput.addEventListener('input', handleChangeImage);

var sliderText = document.querySelector('.slider__text');
var sliderInput = document.querySelector('.slider__input');
function handleSliderInput () {
    var text = sliderInput.value;
    sliderText.innerText = text;
}
sliderInput.addEventListener('input', handleSliderInput);