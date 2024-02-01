
// let monBouton1 = document.querySelector(".monBouton1");
// console.log(monBouton1);
// let monBouton2 = document.querySelector(".monBouton2");
// console.log(monBouton2);
// let monImage = document.querySelector(".monImage");

// monBouton1.addEventListener("click", () => {
//     let mesImages = [
//         'IMAGES/image-Chat.jpg',
//         'IMAGES/image-Chien.webp',
//         'IMAGES/image-Lapin.jpg',
//         'IMAGES/image-Oiseaux.jpg'
//     ];
//     for (i=0; i<mesImages.length; i++){
        
//         let nouvelImage = document.createElement("img");
//         nouvelImage.innerHTML = monImage.outerHTML;
//         let monCarrousel = document.querySelector(".monCarrousel");
//         // monCarrousel.appendChild(nouvelImage);
//         // console.log(monCarrousel);
//         console.log(nouvelImage);
//         // console.log(mesImages[i]);
//         // monImage.src = mesImages[i];
      
//     }
// })

/////////////////////////////////// Début mon Carrousel /////////////////////////////////////:

// let monBouton1 = document.querySelector(".monBouton1");
// let monBouton2 = document.querySelector(".monBouton2");
// let monImage = document.querySelector(".monImage");

// let mesImages = [
//     'IMAGES/image-Chat.jpg',
//     'IMAGES/image-Chien.webp',
//     'IMAGES/image-Lapin.jpg',
//     'IMAGES/image-Oiseaux.jpg'
// ];

// let i = 0;

// monBouton1.addEventListener("click", () => {
//     i = (i + 1) % mesImages.length;
//     monImage.src = mesImages[i];
// });

// monBouton2.addEventListener("click", () => {
//     i = (i + 1) % mesImages.length;
//     monImage.src = mesImages[i];
// });

///////////////////////////// Début mon annimation ////////////////////////////////////////////////

// let monBouton1 = document.querySelector(".monBouton1");
// let monBouton2 = document.querySelector(".monBouton2");
// let monImage = document.querySelector(".monImage");

// let mesImages = [
//     'IMAGES/image-Chat.jpg',
//     'IMAGES/image-Chien.webp',
//     'IMAGES/image-Lapin.jpg',
//     'IMAGES/image-Oiseaux.jpg'
// ];

// let indiceImage = 0;

// function afficherImage() {
//     monImage.src = mesImages[indiceImage];
// }

// function imageSuivante() {
//     indiceImage = (indiceImage + 1) % mesImages.length;
//     afficherImage();
// }

// monBouton1.addEventListener("click", imageSuivante);

// function demarrerAnimation() {
//     imageSuivante();
//     setTimeout(demarrerAnimation, 2000); // Change d'image toutes les 2000 millisecondes (2 secondes)
// }

// demarrerAnimation(); // Lancer l'animation au chargement de la page

//////////////////// Début Horloge ////////////////////////////////////////////////

function monHorloge() {
    let now = new Date();
    let hours = now.getHours() % 24; // Pour convertir au format 24
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // mon format de l'heure HH:MM:SS
    let affichageHeureJS = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    affichageHeureHTML.textContent = affichageHeureJS;
}

// Pour mettre à jour l'horloge
setInterval(monHorloge, 1000);

// la mise à jour initiale
monHorloge();

//////////////////// Début de mon Brouillon ////////////////////////////////////////////////

