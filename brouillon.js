

//     function myFunction() {
//         let tata = document.getElementByClassName("toto");
//         tata.querySelector(".changeText ").innerHTML = "Non c’est easy!";
//       }

// console.log(document.getElementById("querySelector "));

// let baliseZonePropositionSpan = document.querySelector("span");
// console.log(baliseZonePropositionSpan);

// Début 2
// let listeInputRadio = document.querySelectorAll(".zoneChoix input");
// console.log(listeInputRadio);
// for (let i = 0; i < listeInputRadio.length; i++) {
//   console.log(listeInputRadio[i]);
// }
// for (let prop in listeInputRadio){ 
//   console.log(prop + "==>" + listeInputRadio[prop])
// }
// Fin 2

// Début 3
// let baliseImage = document.getElementById("premiereImage");
// console.log(baliseImage.outerHTML)
// baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
// baliseImage.src = "cheminImage.jpg";
// baliseImage.classList.add("nouvelleClasse")
// baliseImage.classList.remove("photo")
// console.log(baliseImage.outerHTML)
// let recupererAttribut= baliseImage.getAttribute("alt")
// console.log(recupererAttribut)
// // Fin 3
// Début exercice  Changer la couleur du parent au clic
// let myButtom = document.querySelectorAll("buttom");
// console.log(myButtom)
// Fin 3
// let myInput = document.createElement("input");
// console.log(myInput);
// document.body.append(myInput)
// myInput.setAttribute("placeholder", "Veuillez taper du")

// let h1 = document.createElement("h1");
// h1.setAttribute("class", "mon-h1");
// let titrePage="Bonjour le monde !!!"
// h1.innerHTML = titrePage;
// console.log(h1)
// let body = document.getElementsByTagName("body");
// document.body.appendChild(h1);
// console.log(body);
// Début création de main, de h1 et de p dans HTML à partir de JS
// let textH1 = "Présentation de mon pays";
// let textP = "Le Burundi est un pays des grands-lacs que j'aime beaucoup.";
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// p.textContent = textP; // Méthode d'ajout de texte à privilégier
// h1.innerText = textH1; // Méthode d'ajout de texte à ne pas privilégier
// let main = document.createElement("main");
// main.appendChild(h1);
// let body = document.getElementsByClassName("body");
// document.body.appendChild(main);
// main.appendChild(p);
// console.log(body);
// console.log(main.innerHTML);
// console.log(p);
// console.log(h1);
// Fin création de main, de h1 et de p dans HTML à partir de JS

// let buttom = document.querySelector("#monBouton");
// console.log(buttom.childNodes);
// // buttom.addEventListener("click", function(){
// // alert("vous avez cliqué")
// // // })
// // console.log(buttom); 
// // for (let i=0 ; i < buttom.length ; i++) {
// buttom.addEventListener("click", (event) => {
//     // for (var i = 0; i < buttom.length; i++) {     
//     console.log(event)
//     // }
// });
// }

// document.addEventListener('keypress', (event) => {
//     console.log(event)
// });

// swal ( "Oops" ,  "Something went wrong!" ,  "error" )
// alert ("Oops, something went wrong!")

// Début exercice liste de film
// let listeFilms = ["Star Wars", "Le Seigneur des Anneaux", "Le Hobbit", "Harry Potter"]
// let ul = document.createElement("ul");
// for (let i = 0; i < listeFilms.length; i++) {
//     let li = document.createElement("li");
//     li.textContent = listeFilms[i]
//     console.log(listeFilms[i])
//     ul.appendChild(li);
// console.log(li);
// }
// let body = document.getElementsByTagName("body");
// document.body.appendChild(ul);

// Début autre chose 4
// let hey = document.getElementsByTagName("label");
// for (let i= 0; i<hey.length; i++) {
//     // console.log(hey[i])
// }
// // console.log(hey[1]);
// let hey1 = hey[1];
// console.log(hey1);
let monBouton1 = document.querySelector(".monBouton1");
console.log(monBouton1);
let monBouton2 = document.querySelector(".monBouton2");
console.log(monBouton2);

monBouton1.addEventListener("click", () => {
    let mesImages = [
        'IMAGES/image-Chat.jpg',
        'IMAGES/image-Chien.webp',
        'IMAGES/image-Lapin.jpg',
        'IMAGES/image-Oiseaux.jpg'
    ];
    for (i=0; i<mesImages.length; i++){
        let monImage = document.querySelector(".monImage");
        console.log(mesImages[i]);
        monImage.src = mesImages[i];
    }
})