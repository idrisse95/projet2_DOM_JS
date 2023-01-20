// // ligne1
// let cartes = document.querySelectorAll('#carteDuJeux .card')
// let divCartes = document.querySelectorAll('#carteDuJeux .card div')
// console.log(cartes);

// let card1 = document.querySelector('#ligne1 .cd1')
// let divCard1 = document.querySelector('#ligne1 .cd1 div img')
// let card2 = document.querySelector('#ligne1 .cd2')
// let divCard2 = document.querySelector('#ligne1 .cd2 div')
// // let card3 = document.querySelector('#ligne1 .cd1')
// // let divCard3 = document.querySelector('#ligne1 .cd1 div')

// let card4 = document.querySelector('#ligne2 .cd3')
// let divCard4 = document.querySelector('#ligne1 .cd3 div')
// let card5 = document.querySelector('#ligne2 .cd2')
// let divCard5 = document.querySelector('#ligne1 .cd2 div')
// // let card6 = document.querySelector('#ligne2 .cd3')
// // let divCard6 = document.querySelector('#ligne1 .cd1 div')

// console.log(divCard1);

// cartes.forEach(element => {
// console.log(element.className);
//     element.addEventListener('click', () => {
//         switch (element.className) {
//             case "card cd1":
//                 element.setAttribute('style', 'transform:rotateY(180deg)')
//                 divCard1.setAttribute('src','./public/img/img1.png')
//                 console.log("un");
//                 break;


//             case "card cd2":
//                 element.setAttribute('style', 'transform:rotateY(180deg)')
//                 divCard2.setAttribute('src','./public/img/img2.png')
//                 divCard5.setAttribute('src','./public/img/img2.png')
//                 console.log("deu");
//                 break;


//             case "card cd3":
//                 element.setAttribute('style', 'transform:rotateY(180deg)')
//                 divCard4.setAttribute('src','./public/img/img3.png')
//                 console.log("trois");
//                 break;

//             default:
//                 break;
//         }

//     })
// });



























// divCartes.forEach(ob => {
//     console.log(ob);
//     cartes.forEach(zz => {
//         console.log(zz);
//     });
//     });

//  var carte1 = 

// cartes.forEach(element => {


//             element.addEventListener('click', () => {
//             console.log(element);
//                 element.style.transform = "rotateY(180deg)"


//                 if (element.className='card cd1') {
//                     console.log("oke");
//                 }
//                 else{
//                     console.log('non');
//                 }






// cliquer.style.transform = "rotateY(180deg)"
// // divCartes.setAttribute('style','z-index:0')
// cliquer.style.backgroundColor = "red"




// if (cliquer.className != element.className) {
//     element.style.transform = "rotateY(180deg)"
//     element.style.backgroundColor = "green"
// }

// // } else if (element.className=('cd1')) {

// else{
//     switch (element.className) {
//         case cliquer.className:

//             // setTimeout(() => {
//             //     element.style.display='none'
//             // }, 2000);
//             break;

//         default:
//             break;
//     }

// }

// switch (element.className) {
//     case "card cd1":
//         element.style.transform="rotateY(180deg)"
//         element.style.backgroundColor="green"

//         break;

//     case "card cd2":
//         element.style.transform="rotateY(180deg)"
//         element.style.backgroundColor="red"

//         break;

//     case "card cd2":
//         element.style.transform="rotateY(180deg)"
//         element.style.backgroundColor="pink"

//         break;

//     default:
//        element.style.transform="rotate(0)"
//        console.log("non");

//         break;





// let divResultat = document.querySelector('#resultat');


// let terrain1 = [
//     [0,0,0],
//     [0,0,0]
// ];

// let resultat1 = [
//     [2,1,3],
//     [1,3,2]


// ]

// let oldSelection = [] 
// let nbAffiche = 0
// let ready  = true

// afficherTab()

// function afficherTab(){
//     var txt = ""

// //ligne
//    for (let i = 0; i < terrain1.length; i++) {
//             txt+= " <div>"
// //colone
//         for (let j = 0; j < terrain1[i].length; j++) {
//             if (terrain1[i][j] == 0) {
//                                                                          // on met les backslash pour desac les guillement
//                 txt+='<button class="btn btn-primary m-2" style="width:200px;height:100px;" onclick="verif(\''+i+'-'+j+'\')">Afficher</button>'
//             }
//             else {
//                 txt+= "<img src='"+img(terrain1[i][j])+"' style='width:200px;height:100px;' class='m-2'>"
//             }

//         }
//             txt+= "</div>"
//    }
//    divResultat.innerHTML = txt
// }




// function img(valeur) {
//     var imgTxt = ""
//   switch (valeur) {
//     case 1: imgTxt+= "./public/img/img1.png"
//         break;
//     case 2: imgTxt+= "./public/img/img2.png"
//         break;
//     case 3: imgTxt+= "./public/img/img3.png"
//         break;


//     default: console.log('non pri');
//         break;
//   }

//   return imgTxt;

// }

// function verif(carte){
//     if (ready) {
//         setTimeout(() => {



//         }, 500);


//     nbAffiche++
//     var l = carte.substr(0,1);
//     var c = carte.substr(2,1);


//     terrain1[l][c] = resultat1[l][c]
//     afficherTab()

//     if (nbAffiche>1) {
//         //verifs

//         if (terrain1[l][c] !== resultat1[oldSelection[0]][oldSelection[1]] ) {
//             terrain1[l][c] = 0
//             terrain1[oldSelection[0]][oldSelection[1]] = 0;

//         }
//         afficherTab()
//         nbAffiche=0
//     }

//     oldSelection = [l,c]
// }
// }

















const cardsArray = [{
    'name': 'shell',
    'img': './public/img/img1.png',
  },
  {
    'name': 'star',
    'img': './public/img/img2.png',
  },
  {
    'name': 'bobomb',
    'img': './public/img/img3.png',
  },
//   {
//     'name': 'mario',
//     'img': './public/img/img4.png',
//   },
//   {
//     'name': 'luigi',
//     'img': './public/img/img5.png',
//   },
//   {
//     'name': 'peach',
//     'img': './public/img/img6.png',
//   },
//   {
//     'name': '1up',
//     'img': './public/img7/img.png',
//   },
//   {
//     'name': 'mushroom',
//     'img': './public/img8/img.png',
//   },
//   {
//     'name': 'thwomp',
//     'img': './public/img9/img.png',
//   },
//   {
//     'name': 'bulletbill',
//     'img': './public/img10/img.png',
//   },
//   {
//     'name': 'coin',
//     'img': './public/img11/img.png',
//   },
//   {
//     'name': 'goomba',
//     'img': './public/img12/img.png',
//   },
];

const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

});




let facileButton = document.getElementById('facileB')
console.log(facileButton);

 

facileButton.addEventListener('click',()=>{
     document.getElementById('facile').className='ouvrir'
     document.getElementById('acceuil').className='fermer'
})



















let input1 = document.getElementById('inputPseudo')
let chek = document.getElementById('chekInput')
 
let nomP = document.getElementById('nom')
    
 chek.addEventListener('click',()=>{
     nomP.innerHTML = input1.value

})
