 let total = document.getElementById('total')

 let point = document.getElementById('point')
 let coup = document.getElementById('coup')

 let fini = document.getElementById('fini')
 let fini2 = document.getElementById('fini2')
 let rejouer = document.getElementById('rejouer')
 let rejouer2 = document.getElementById('rejouer2')
 let buttonNiv = document.getElementById('buttonNiv')
 let buttonNiv2 = document.getElementById('buttonNiv2')


 let terrain2 = document.getElementById('terrain2')
 let terrain = document.getElementById('terrain')

 let input1 = document.getElementById('inputPseudo')
 let chek = document.getElementById('chekInput')
 let acceuil = document.getElementById('acceuil')
 let nomP = document.getElementById('pseudoKr')
 let pointP = document.getElementById('pointKr')


 let niveau = document.getElementById('niveau')
 let moyen = document.getElementById('faci')
 let difficile = document.getElementById('diff')






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
 let perdu = document.getElementById('perdu')
 let perduB = document.getElementById('perduB')
 // la je fait une function pour voir si ça match
 let epuiser = 0
 let coupP =  parseInt(epuiser)
 // la je fait une function pour voir si ça match

 function memeCarte(srcImg1, srcImg2) {
   if (srcImg1 != srcImg2) {
     coupP++
     coup.innerHTML = "Epuiser: " + coupP + "Coup: 20"
     if (coupP == 20) {
       perdu.classList.add('perdu')
       perduB.addEventListener('click', () => {
        location.reload()
       })
     }
   }
   if (srcImg1 === srcImg2) {
     //Je donne 400ms avant d'executer SI les src son pareil
     match++
     pointP.innerHTML = "Point: " + parseInt(match)
     console.log(match);
     setTimeout(() => {
       if (match == 8) {


         fini.classList.add('scaleFini')
         rejouer.addEventListener('click', () => {
           location.reload()
         })
         buttonNiv.addEventListener('click', () => {
           terrain.classList.remove('ouvrir')
           total.classList.remove('horror')
           niveau.classList.add('ouvrir')
           point.classList.remove('point')
         })
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
   let tab = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
   tab.sort(() => Math.random() > 0.5 ? 1 : -1)


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
 console.log();
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


 


 let perdu2 = document.getElementById('perdu2')
 let perduB2 = document.getElementById('perduB2')
 // la je fait une function pour voir si ça match
 let epuiser2 = 0
 let coupP2 = parseInt(epuiser2)

 function memeCarte2(srcImg12, srcImg22) {
   if (srcImg12 != srcImg22) {
     coupP2++
     coup.innerHTML = "Epuiser: " + coupP2 + "Coup: 10"
     if (coupP2 == 10) {
       // coup.innerHTML = "Epuiser: " - coupP + "coup :10"
       
       perdu2.classList.add('perdu2')

       perduB2.addEventListener('click', () => {
         location.reload()
         
       })
     }

   }
   if (srcImg12 === srcImg22) {
     //Je donne 400ms avant d'executer SI les src son pareil
     match2++
     pointP.innerHTML = "Point: " + parseInt(match2)
     console.log(match2);
     setTimeout(() => {

       if (match2 == 4) {
        temp.textContent= "tu as fini en: "+seconde+"seconde"
      
         console.log(match2);
         fini2.classList.add('scaleFini2')
         rejouer2.addEventListener('click', () => {
           location.reload()
         })
         buttonNiv2.addEventListener('click', () => {
           terrain2.classList.remove('ouvrir')
           total.classList.remove('fantasyBack')
           niveau.classList.add('ouvrir')
           point.classList.remove('point')
         })

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
   let tab2 = [1, 2, 3, 4, 1, 2, 3, 4]
   tab2.sort(() => Math.random() > 0.5 ? 1 : -1)
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



























 //TEMP RESTANT
// let countDate = new Date("00").getTime();
// let x = setInterval(function timesJ() {
//   let current = new Date().getTime();
//   let distance = countDate - current
//   let seconde = Math.floor((distance%(1000 * 60))/1000)
//   document.getElementById('Times').innerHTML+=seconde
//  },1000)

let temp = document.getElementById('Times')
let seconde = 0
let o =  seconde

function times(){
 
if(match2<3){
  setInterval(() => {
    temp.textContent ="Temp: "+ seconde++
  }, 1000);
  
      
  
} 



  


  // do {
  //   setInterval(() => {
  //      temp.textContent = seconde-1
  //     seconde--
  //     if (seconde<1) {
  //       temp.textContent = "fin"
  //       perdu2.classList.add('perdu2')
  //       perdu.classList.add('perdu')
  //       perduB.addEventListener('click',()=>{
  //         location.reload()
  //       })
  //       perduB2.addEventListener('click', () => {
  
  //         location.reload()
          
  //     })}}, 1000);
  // } while (seconde>Math.floor());
 



}




 chek.addEventListener('click', () => {
   if (input1.value == "") {
     input1.style.border = "2px solid red"
     input1.style.color = "gray"
     alert('METTEZ UN PSEUDO AVANT DE COMMENCEZ !!')
   } else {
     nomP.innerHTML += "   " + input1.value
     acceuil.classList.add('fermer')
     niveau.classList.add('ouvrir')
   }

 })

 moyen.addEventListener('click', () => {
   niveau.classList.remove('ouvrir')
   terrain2.classList.add('ouvrir', 'fantasy')
   total.classList.add('fantasyBack')
   point.classList.add('point')
   times()

 })

 difficile.addEventListener('click', () => {
   niveau.classList.remove('ouvrir')
   total.classList.add('horror')
   point.classList.add('point')
   terrain.classList.add('ouvrir')
   times()

 })