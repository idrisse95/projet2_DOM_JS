// // // ligne1
// // let cartes = document.querySelectorAll('#carteDuJeux .card')
// // let divCartes = document.querySelectorAll('#carteDuJeux .card div')
// // console.log(cartes);

// // let card1 = document.querySelector('#ligne1 .cd1')
// // let divCard1 = document.querySelector('#ligne1 .cd1 div img')
// // let card2 = document.querySelector('#ligne1 .cd2')
// // let divCard2 = document.querySelector('#ligne1 .cd2 div')
// // // let card3 = document.querySelector('#ligne1 .cd1')
// // // let divCard3 = document.querySelector('#ligne1 .cd1 div')

// // let card4 = document.querySelector('#ligne2 .cd3')
// // let divCard4 = document.querySelector('#ligne1 .cd3 div')
// // let card5 = document.querySelector('#ligne2 .cd2')
// // let divCard5 = document.querySelector('#ligne1 .cd2 div')
// // // let card6 = document.querySelector('#ligne2 .cd3')
// // // let divCard6 = document.querySelector('#ligne1 .cd1 div')

// // console.log(divCard1);

// // cartes.forEach(element => {
// // console.log(element.className);
// //     element.addEventListener('click', () => {
// //         switch (element.className) {
// //             case "card cd1":
// //                 element.setAttribute('style', 'transform:rotateY(180deg)')
// //                 divCard1.setAttribute('src','./public/img/img1.png')
// //                 console.log("un");
// //                 break;


// //             case "card cd2":
// //                 element.setAttribute('style', 'transform:rotateY(180deg)')
// //                 divCard2.setAttribute('src','./public/img/img2.png')
// //                 divCard5.setAttribute('src','./public/img/img2.png')
// //                 console.log("deu");
// //                 break;


// //             case "card cd3":
// //                 element.setAttribute('style', 'transform:rotateY(180deg)')
// //                 divCard4.setAttribute('src','./public/img/img3.png')
// //                 console.log("trois");
// //                 break;

// //             default:
// //                 break;
// //         }

// //     })
// // });



























// // divCartes.forEach(ob => {
// //     console.log(ob);
// //     cartes.forEach(zz => {
// //         console.log(zz);
// //     });
// //     });

// //  var carte1 = 

// // cartes.forEach(element => {


// //             element.addEventListener('click', () => {
// //             console.log(element);
// //                 element.style.transform = "rotateY(180deg)"


// //                 if (element.className='card cd1') {
// //                     console.log("oke");
// //                 }
// //                 else{
// //                     console.log('non');
// //                 }






// // cliquer.style.transform = "rotateY(180deg)"
// // // divCartes.setAttribute('style','z-index:0')
// // cliquer.style.backgroundColor = "red"




// // if (cliquer.className != element.className) {
// //     element.style.transform = "rotateY(180deg)"
// //     element.style.backgroundColor = "green"
// // }

// // // } else if (element.className=('cd1')) {

// // else{
// //     switch (element.className) {
// //         case cliquer.className:

// //             // setTimeout(() => {
// //             //     element.style.display='none'
// //             // }, 2000);
// //             break;

// //         default:
// //             break;
// //     }

// // }

// // switch (element.className) {
// //     case "card cd1":
// //         element.style.transform="rotateY(180deg)"
// //         element.style.backgroundColor="green"

// //         break;

// //     case "card cd2":
// //         element.style.transform="rotateY(180deg)"
// //         element.style.backgroundColor="red"

// //         break;

// //     case "card cd2":
// //         element.style.transform="rotateY(180deg)"
// //         element.style.backgroundColor="pink"

// //         break;

// //     default:
// //        element.style.transform="rotate(0)"
// //        console.log("non");

// //         break;





// // let divResultat = document.querySelector('#resultat');


// // let terrain1 = [
// //     [0,0,0],
// //     [0,0,0]
// // ];

// // let resultat1 = [
// //     [2,1,3],
// //     [1,3,2]


// // ]

// // let oldSelection = [] 
// // let nbAffiche = 0
// // let ready  = true

// // afficherTab()

// // function afficherTab(){
// //     var txt = ""

// // //ligne
// //    for (let i = 0; i < terrain1.length; i++) {
// //             txt+= " <div>"
// // //colone
// //         for (let j = 0; j < terrain1[i].length; j++) {
// //             if (terrain1[i][j] == 0) {
// //                                                                          // on met les backslash pour desac les guillement
// //                 txt+='<button class="btn btn-primary m-2" style="width:200px;height:100px;" onclick="verif(\''+i+'-'+j+'\')">Afficher</button>'
// //             }
// //             else {
// //                 txt+= "<img src='"+img(terrain1[i][j])+"' style='width:200px;height:100px;' class='m-2'>"
// //             }

// //         }
// //             txt+= "</div>"
// //    }
// //    divResultat.innerHTML = txt
// // }




// // function img(valeur) {
// //     var imgTxt = ""
// //   switch (valeur) {
// //     case 1: imgTxt+= "./public/img/img1.png"
// //         break;
// //     case 2: imgTxt+= "./public/img/img2.png"
// //         break;
// //     case 3: imgTxt+= "./public/img/img3.png"
// //         break;


// //     default: console.log('non pri');
// //         break;
// //   }

// //   return imgTxt;

// // }

// // function verif(carte){
// //     if (ready) {
// //         setTimeout(() => {



// //         }, 500);


// //     nbAffiche++
// //     var l = carte.substr(0,1);
// //     var c = carte.substr(2,1);


// //     terrain1[l][c] = resultat1[l][c]
// //     afficherTab()

// //     if (nbAffiche>1) {
// //         //verifs

// //         if (terrain1[l][c] !== resultat1[oldSelection[0]][oldSelection[1]] ) {
// //             terrain1[l][c] = 0
// //             terrain1[oldSelection[0]][oldSelection[1]] = 0;

// //         }
// //         afficherTab()
// //         nbAffiche=0
// //     }

// //     oldSelection = [l,c]
// // }
// // }

















// const cardsArray = [{
//     'name': 'shell',
//     'img': './public/img/img1.png',
//   },
//   {
//     'name': 'star',
//     'img': './public/img/img2.png',
//   },
//   {
//     'name': 'bobomb',
//     'img': './public/img/img3.png',
//   },
// //   {
// //     'name': 'mario',
// //     'img': './public/img/img4.png',
// //   },
// //   {
// //     'name': 'luigi',
// //     'img': './public/img/img5.png',
// //   },
// //   {
// //     'name': 'peach',
// //     'img': './public/img/img6.png',
// //   },
// //   {
// //     'name': '1up',
// //     'img': './public/img7/img.png',
// //   },
// //   {
// //     'name': 'mushroom',
// //     'img': './public/img8/img.png',
// //   },
// //   {
// //     'name': 'thwomp',
// //     'img': './public/img9/img.png',
// //   },
// //   {
// //     'name': 'bulletbill',
// //     'img': './public/img10/img.png',
// //   },
// //   {
// //     'name': 'coin',
// //     'img': './public/img11/img.png',
// //   },
// //   {
// //     'name': 'goomba',
// //     'img': './public/img12/img.png',
// //   },
// ];

// const gameGrid = cardsArray
//   .concat(cardsArray)
//   .sort(() => 0.5 - Math.random());

// let firstGuess = '';
// let secondGuess = '';
// let count = 0;
// let previousTarget = null;
// let delay = 1200;

// const game = document.getElementById('game');
// const grid = document.createElement('section');
// grid.setAttribute('class', 'grid');
// game.appendChild(grid);

// gameGrid.forEach(item => {
//   const { name, img } = item;

//   const card = document.createElement('div');
//   card.classList.add('card');
//   card.dataset.name = name;

//   const front = document.createElement('div');
//   front.classList.add('front');

//   const back = document.createElement('div');
//   back.classList.add('back');
//   back.style.backgroundImage = `url(${img})`;

//   grid.appendChild(card);
//   card.appendChild(front);
//   card.appendChild(back);
// });

// const match = () => {
//   const selected = document.querySelectorAll('.selected');
//   selected.forEach(card => {
//     card.classList.add('match');
//   });
// };

// const resetGuesses = () => {
//   firstGuess = '';
//   secondGuess = '';
//   count = 0;
//   previousTarget = null;

//   var selected = document.querySelectorAll('.selected');
//   selected.forEach(card => {
//     card.classList.remove('selected');
//   });
// };

// grid.addEventListener('click', event => {

//   const clicked = event.target;

//   if (
//     clicked.nodeName === 'SECTION' ||
//     clicked === previousTarget ||
//     clicked.parentNode.classList.contains('selected') ||
//     clicked.parentNode.classList.contains('match')
//   ) {
//     return;
//   }

//   if (count < 2) {
//     count++;
//     if (count === 1) {
//       firstGuess = clicked.parentNode.dataset.name;
//       console.log(firstGuess);
//       clicked.parentNode.classList.add('selected');
//     } else {
//       secondGuess = clicked.parentNode.dataset.name;
//       console.log(secondGuess);
//       clicked.parentNode.classList.add('selected');
//     }

//     if (firstGuess && secondGuess) {
//       if (firstGuess === secondGuess) {
//         setTimeout(match, delay);
//       }
//       setTimeout(resetGuesses, delay);
//     }
//     previousTarget = clicked;
//   }

// });




// let facileButton = document.getElementById('facileB')
// console.log(facileButton);



// facileButton.addEventListener('click',()=>{
//      document.getElementById('facile').className='ouvrir'
//      document.getElementById('acceuil').className='fermer'
// })







let carte = document.querySelectorAll('#terrain .card')
console.log(carte);

let match = 0
let carteUn, carteD;
let desactive = false //Sa permet de desac les click apres carteUn et carteD

//retourner la carte
function flipCarte(e) {
  //cliquer sur la carte
  let cliquer = e.target
  //'!==' signifie different de ... et OU égale à
  // dans le iff je dit qu'il prend en compte qu'un seul clique sur la meme carte
  if (cliquer !== carteUn && !desactive) {
    cliquer.classList.add('flip')
    //return la carte qui a té cliquer au premier clique

    if (!carteUn) {
      return carteUn = cliquer
    }

    carteD = cliquer
    //la les clique sont activer car on a pas encore ft de comparaison
    desactive = true;
    //une genre de comparaison des src puis seront appeler 
    let premiereImg = carteUn.querySelector('img').src
    deuxiemeImg = carteD.querySelector('img').src
    //j'appel la fonction et je met en parametre les deux carte cliquer(leur src d'img)
    memeCarte(premiereImg, deuxiemeImg)

  }



}

let back = document.querySelectorAll('#cards .card .back-view')

// la je fait une function pour voir si ça match
function memeCarte(srcImg1, srcImg2) {
  if (srcImg1 === srcImg2) {
    //Je donne 400ms avant d'executer SI les src son pareil
    match++
    console.log(match);
    setTimeout(() => {
    if (match == 8) {

      setTimeout(() => {
        return remettreCarte()
      }, 1000);
      

    }
    
      //les carte en opacity 0 pour quel soit fantome et donc ft en sorte que les autres gardent leur place
      carteUn.style.opacity = "0";
      carteD.style.opacity = "0";
      carteUn.removeEventListener('click', flipCarte)
      carteD.removeEventListener('click', flipCarte)
      carteUn = carteD = "";
    }, 400);








    //on Desactive les clique sur les autre carte un lapse de temp (1 seconde, voir set timeout en bas)
    return desactive = false;


  }
  //je met un timeOut pour dire après cmb de ms temp activer le else
  setTimeout(() => {
    carteUn.classList.add('tourner')
    carteD.classList.add('tourner')

  }, 400);

  setTimeout(() => {
    carteUn.classList.remove("tourner", 'flip')
    carteD.classList.remove("tourner", 'flip')
    carteUn = carteD = "" //la je dit qu'aprs mes deux clique, les variables se remettent a 0 pour éviter les bugg dans ancien clique enregistrer
    desactive = false;
  }, 1000);

  return;

}

function remettreCarte() {
  match = 0
  carteUn = carteD = "";
  //je fait n tableau des valeur qui doivent etre matcher (log), pour mettre random tout (Le random j'ai chercher sur internet de base il n'etait pas comme ca. avec d modif ca a fonctionner mais sincerement j'y comprend pas 100%)
  let tab = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
  tab.sort(() => Math.random() >0.5 ? 1 : -1)


  //en gros le pour le imgTag je prend l'index et je le remplace par le chiffre des src d img
  carte.forEach((element, index) => {
  console.log(element);
    //faire reaparaitre les cartes
    element.style.opacity = "1"
    //enlever la class flip pour revoir le devant
    element.classList.remove('flip')
    let imgTag = element.querySelector('img')
    imgTag.src = `./public/img/img${tab[index]}.png`
    element.addEventListener('click', flipCarte)


  });
}

remettreCarte()

carte.forEach(element => {
  element.addEventListener('click', flipCarte)

});

console.log(match);




































let carte2 = document.querySelectorAll('#terrain2 #cards .card')
console.log(carte2);
let match2 = 0
let carteUn2, carteD2;
let desactive2 = false //Sa permet de desac les click apres carteUn et carteD
//retourner la carte
function flipCarte2(e) {
  //cliquer sur la carte
  let cliquer2 = e.target
  //'!==' signifie different de ... et OU égale à
  // dans le iff je dit qu'il prend en compte qu'un seul clique sur la meme carte
  if (cliquer2 !== carteUn2 && !desactive2) {  
    cliquer2.classList.add('flip')
    //return la carte qui a té cliquer au premier clique

    if (!carteUn2) {
      return carteUn2 = cliquer2
    }

    carteD2 = cliquer2
    //la les clique sont activer car on a pas encore ft de comparaison
    desactive2 = true;
    //une genre de comparaison des src puis seront appeler 
    let premiereImg2 = carteUn2.querySelector('img').src
    deuxiemeImg2 = carteD2.querySelector('img').src
    //j'appel la fonction et je met en parametre les deux carte cliquer(leur src d'img)
    memeCarte2(premiereImg2, deuxiemeImg2)

  }



}

 

// la je fait une function pour voir si ça match
function memeCarte2(srcImg12, srcImg22) {
  if (srcImg12 === srcImg22) {
    //Je donne 400ms avant d'executer SI les src son pareil
    match2++
    console.log(match2);
    setTimeout(() => {
    if (match2 == 4) {

      setTimeout(() => {
        return remettreCarte2()
      }, 1000);
      

    }
    
      //les carte en opacity 0 pour quel soit fantome et donc ft en sorte que les autres gardent leur place
      carteUn2.style.opacity = "0";
      carteD2.style.opacity = "0";
      carteUn2.removeEventListener('click', flipCarte2)
      carteD2.removeEventListener('click', flipCarte2)
      carteUn2 = carteD2 = "";
    }, 400);








    //on Desactive les clique sur les autre carte un lapse de temp (1 seconde, voir set timeout en bas)
    return desactive2 = false;


  }
  //je met un timeOut pour dire après cmb de ms temp activer le else
  setTimeout(() => {
    carteUn2.classList.add('tourner')
    carteD2.classList.add('tourner')

  }, 400);

  setTimeout(() => {
    carteUn2.classList.remove("tourner", 'flip')
    carteD2.classList.remove("tourner", 'flip')
    carteUn2 = carteD2 = "" //la je dit qu'aprs mes deux clique, les variables se remettent a 0 pour éviter les bugg dans ancien clique enregistrer
    desactive2 = false;
  }, 1000);

  return;

}

function remettreCarte2() {
  match2 = 0
  carteUn2 = carteD2 = "";
  //je fait n tableau des valeur qui doivent etre matcher (log), pour mettre random tout (Le random j'ai chercher sur internet de base il n'etait pas comme ca. avec d modif ca a fonctionner mais sincerement j'y comprend pas 100%)
  let tab2 = [1,2,3,4,1,2,3,4]
  tab2.sort(() => Math.random() >0.5 ? 1 : -1)
console.log(tab2);
  //en gros le pour le imgTag je prend l'index et je le remplace par le chiffre des src d img
  carte2.forEach((e, i) => {
    console.log(e);
    //faire reaparaitre les cartes
    e.style.opacity = "1"
    //enlever la class flip pour revoir le devant
    e.classList.remove('flip')
    let imgTag2 = e.querySelector('img')
    imgTag2.src = `./public/img/img2/img${tab2[i]}.png`
    e.addEventListener('click', flipCarte2)


  });
}

remettreCarte2()

carte2.forEach(e => {
  e.addEventListener('click', flipCarte2)

});

console.log(match2);


let total = document.getElementById('total')

let point = document.getElementById('point')

let terrain2 = document.getElementById('terrain2')
let terrain = document.getElementById('terrain')

let input1 = document.getElementById('inputPseudo')
let chek = document.getElementById('chekInput')
let acceuil = document.getElementById('acceuil') 
let nomP = document.getElementById('pseudoKr')


let niveau = document.getElementById('niveau')
let moyen = document.getElementById('faci')
let difficile = document.getElementById('diff')
 chek.addEventListener('click',()=>{
  if (input1.value == "") {
    input1.style.border = "2px solid red"
    input1.style.color = "gray"
    alert('Mettez un pseudo')
  }
  else{
     nomP.innerHTML += "   "+input1.value
     acceuil.classList.add('fermer')
     niveau.classList.add('ouvrir')
    }

})

  moyen.addEventListener('click', ()=>{
    niveau.classList.remove('ouvrir')
    terrain2.classList.add('ouvrir','fantasy')
    total.classList.add('fantasyBack')
    point.classList.add('point')

  })

  difficile.addEventListener('click', ()=>{
    niveau.classList.remove('ouvrir')
    total.classList.add('horror')
    point.classList.add('point')
    terrain.classList.add('ouvrir')

  })