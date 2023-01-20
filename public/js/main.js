// // ligne1
// let cartes = document.querySelectorAll('#carteDuJeux .card')
// let divCartes = document.querySelectorAll('#carteDuJeux .card div')
// console.log(cartes);


// // let card1 = document.querySelector('#ligne1 .cd1')
// // let divCard1 = document.querySelector('#ligne1 .cd1 div')
// // let card2 = document.querySelector('#ligne1 .cd2')
// // let divCard2 = document.querySelector('#ligne1 .cd2 div')
// // let card3 = document.querySelector('#ligne1 .cd1')
// // let divCard3 = document.querySelector('#ligne1 .cd1 div')

// // let card4 = document.querySelector('#ligne2 .cd3')
// // let divCard4 = document.querySelector('#ligne1 .cd3 div')
// // let card5 = document.querySelector('#ligne2 .cd2')
// // let divCard5 = document.querySelector('#ligne1 .cd2 div')
// // let card6 = document.querySelector('#ligne2 .cd3')
// // let divCard6 = document.querySelector('#ligne1 .cd1 div')
// // divCartes.forEach(ob => {
// //     console.log(ob);
// //     cartes.forEach(zz => {
// //         console.log(zz);
// //     });
// //     });

// let number = 0
// console.log(number);


// cartes.forEach(element => {


 
   

// let cliquer
//     element.addEventListener('click', () => {
//         cliquer = element
//     }
//     )

// console.log(element.textContent);
  
//             element.addEventListener('click', () => {
//             console.log(element);
//                 cliquer.style.transform = "rotateY(180deg)"
//                 cliquer.style.backgroundColor = "wheat"

//                 if (element.textContent==1 && element.textContent==1) {
//                     console.log("oke");
//                 }
//                 else{
//                     console.log('non');
//                 }
                
       
             
                
              

//             // cliquer.style.transform = "rotateY(180deg)"
//             // // divCartes.setAttribute('style','z-index:0')
//             // cliquer.style.backgroundColor = "red"




//         // if (cliquer.className != element.className) {
//         //     element.style.transform = "rotateY(180deg)"
//         //     element.style.backgroundColor = "green"
//         // }

//         // // } else if (element.className=('cd1')) {
           
//         // else{
//         //     switch (element.className) {
//         //         case cliquer.className:
                    
//         //             // setTimeout(() => {
//         //             //     element.style.display='none'
//         //             // }, 2000);
//         //             break;
            
//         //         default:
//         //             break;
//         //     }

//         // }
    
//         // switch (element.className) {
//         //     case "card cd1":
//         //         element.style.transform="rotateY(180deg)"
//         //         element.style.backgroundColor="green"

//         //         break;

//         //     case "card cd2":
//         //         element.style.transform="rotateY(180deg)"
//         //         element.style.backgroundColor="red"

//         //         break;

//         //     case "card cd2":
//         //         element.style.transform="rotateY(180deg)"
//         //         element.style.backgroundColor="pink"

//         //         break;

//         //     default:
//         //        element.style.transform="rotate(0)"
//         //        console.log("non");

//         //         break;

            
// })})


// let divResultat = document.querySelector('#resultat');
 

// let terrain = [
//     [0,1,2],
//     [0,0,0]
// ];

// afficherTab()

// function afficherTab(){
//     var txt = ""
   

//    for (let i = 0; i < terrain.length; i++) {
//             txt+= " <div>"
//         for (let j = 0; j < terrain[i].length; j++) {
//             if (terrain[i][j] == 0) {
//                 txt+='<button class="btn btn-primary m-2" style="width:200px;height:100px;">Afficher</button>'
//             }
//             else {
//                 txt+= "<img src='"+img(terrain[i][j])+"' style='width:200px;height:100px;' class='m-2'>"
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



