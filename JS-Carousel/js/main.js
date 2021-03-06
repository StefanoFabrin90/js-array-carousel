/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


// try at home
// Riferimenti
const imageRif = document.querySelector('.images');
const thumbRif = document.querySelector('.thumbs');

for(let i = 0; i < imageCollection.length; i++){
    imageRif.innerHTML += 
    `<div class="image-container">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
        <div class="text">
            <h3>${titleCollection[i]}</h3>
            <p>${textCollection[i]}</p>
        </div>
    </div>`

    thumbRif.innerHTML +=
    `<div class="thumb">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    </div>`
}


// classe active
let actImage = 2;
document.getElementsByClassName('image-container')[actImage].classList.add('active');
document.getElementsByClassName('thumb')[actImage].classList.add('active')


// scorrimento immagini in basso
const next = document.querySelector('.next');

next.addEventListener('click', function(){

    actImage++;

    if(actImage > imageCollection.length -1){ 
        actImage = 0;
    } 
    
    // reset
    document.querySelector('.image-container.active').classList.remove('active');
    document.querySelector('.thumb.active').classList.remove('active');

    // aggiunger active
    document.getElementsByClassName('image-container')[actImage].classList.add('active');
    document.getElementsByClassName('thumb')[actImage].classList.add('active')
})

// scorrimento immagini in alto
const prev = document.querySelector('.prev');

prev.addEventListener('click', function(){
    
    if(actImage === 0){
        actImage = imageCollection.length-1;
    } else {
        actImage--;
    }

    // reset
    document.querySelector('.image-container.active').classList.remove('active');
    document.querySelector('.thumb.active').classList.remove('active');

    // aggiunger active
    document.getElementsByClassName('image-container')[actImage].classList.add('active');
    document.getElementsByClassName('thumb')[actImage].classList.add('active')
})
