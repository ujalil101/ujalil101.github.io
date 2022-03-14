/* Makes image pop while hovering over text*/
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
/* Makes image disappear when not hovering over text*/
function removeImg() {
    imgContainer.style.animation = 'fadeOut. 4s';
    
    setTimeout( () => {
        body.removeChild(imgContainer);
    }, 750);
}
/* Play/pause background music*/
var myAudio = document.getElementById("mus");
function PlayMusic(){
    myAudio.controls = false;
    if(myAudio.paused) {
        myAudio.play();
    }
    else {
        myAudio.pause();
    }
}
/* Generates a different quote when loaded */
const Output = document.getElementById("Quotes");
function ShowQuote()
  {
    var quotes = [
    	'“Remember, with great power comes great responsibility.” — Uncle Ben', 
        '“Intelligence is a privilege, and it needs to be used for the greater good of people.” — Dr. Octopus',
        '“Say hello to my little friend.” — Tony Montana',
        '“You Either Die A Hero Or You Live Long Enough To See Yourself Become The Villain.” — Harvey Dent ',
        '“If you\'re good at something, never do it for free.” — The Joker',
        '“Why So Serious?” — The Joker',
        '“Why Do We Fall, Sir? So That We Can Learn To Pick Ourselves Up.” — Alfred Pennyworth',
        '“You\'re a wizard, Harry.” — Rubeus Hagrid',
        '“I am Iron Man” — Tony Stark',
        '“I volunteer as tribute.” — Katniss Everdeen',
        '“Honey? Where\’s my super suit?” — Frozone',
        '“Be prepared for the worst, but hope for the best.” — Keller Dover' ,
        '“I can do this all day.” — Steve Rogers',
        '“Now that\'s how you drive! From now on - That\'s how you drive!” — Detective Mike Lowrey',
        '“We are only as strong as we are united, as weak as we are divided.” — Albus Dumbledore',
        '“Happiness can be found even in the darkest of times if one only remembers to turn on the light.” — Albus Dumbledore',
        '"But the one thing they love more than a hero is to see a hero fail, fall, die trying. In spite of everything you\'ve done for them, eventually, they will hate you." — Green Goblin ' ,
        '“Merry Christmas You Filthy Animal!” — Kevin McCallister',
        '“Which would be worse, to live a monster or die as a good man?” — Teddy Daniels' ,
        '“Very nice!”  — Borat ',
        '“It\’s not who I am underneath, but what I do that defines me." — Batman' ,
        '"I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!" - Walter White' ,
        '"I did it for me. I liked it. I was good at it. And I was really — I was alive." - Walter White',
        '"You\'re goddamn right" - Heisenburg' ,
        '"To them, you\'re  just a freak, like me! They need you right now, but when  they don\'t, they\'ll cast you out, like a leper!" - The Joker'
    ];
    var random_pick = Math.floor(Math.random() * (quotes.length));
    document.write(quotes[random_pick]);
  }
Output.addEventListener("load", ShowQuote());
/* Makes quote disappear after 6 seconds! */ 
setTimeout(() => {
    Output.style.display = 'none';
  }, 6000);


