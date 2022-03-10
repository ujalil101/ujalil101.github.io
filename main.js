/* .js script to make image pop while hovering over text*/
const body = document.querySelector('body');
const imgContainer = document.createElement('div');

function displayImg(imgUrl, elt) {

    body.appendChild(imgContainer);

    imgContainer.innerHTML= `<img src='${imgUrl}'>`;

    imgContainer.classList.add('displayMe');

    imgContainer.style.top = (elt.offsetTop + 1900) + 'px';

    imgContainer.style.left = (elt.offsetLeft + 50) + 'px';

    imgContainer.style.animation = 'fadeIn. 4s';

}
function removeImg() {
    imgContainer.style.animation = 'fadeOut. 4s';
    
    setTimeout( () => {
        body.removeChild(imgContainer);
    }, 750);
}