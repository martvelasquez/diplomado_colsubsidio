
/*document.getElementById("mydiv").innerHTML = "Changing Text Here"
document.getElementById("mydiv1").innerHTML = "Changing Text Here1"
document.getElementById("mydivcr").innerHTML = "Changing Text Herecr"
document.getElementById("mydivc").innerHTML = "Changing Text Herec"
document.getElementById("mydivf").innerHTML = "Changing Text Heref"
document.getElementById("mydivt").innerHTML = "Changing Text Heret"
document.querySelector("mydiv").innerHTML = "Changing Text Here"*/

function cambiar(){
   document.getElementsByTagName('h1')[0].innerHTML="Cambiar"
   document.getElementsByTagName('h2')[0].innerHTML="Cambiar"
   document.getElementsByTagName('h3')[0].innerHTML="Cambiar"
   document.getElementsByTagName('h4')[0].innerHTML="Cambiar"
   document.getElementsByTagName('h5')[0].innerHTML="Cambiar"
   document.getElementsByTagName('h6')[0].innerHTML="Cambiar"
   document.getElementsByTagName('h7')[0].innerHTML="Cambiar"


}

/*section.children[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12].textContent = "Otro titulo mas"*/



function mostrarnb() {

let mostrarnb = document.getElementById("navbarmo")
   if (mostrarnb.style.display === "none") {
        mostrarnb.style.display ="block";
   } else {
          mostrarnb.style.display = "none"
   }
}

function mostrarcr() {

    let mostrarcr = document.getElementById("carouselmo")
       if (mostrarcr.style.display === "none") {
            mostrarcr.style.display ="block";
       } else {
              mostrarcr.style.display = "none"
       }
    }

    function mostrarcard() {

        let mostrarcard = document.getElementById("cardmo")
           if (mostrarcard.style.display === "none") {
                mostrarcard.style.display ="block";
           } else {
                  mostrarcard.style.display = "none"
           }
        }


        function mostrartable() {

            let mostrartable = document.getElementById("tablemo")
               if (mostrartable.style.display === "none") {
                    mostrartable.style.display ="block";
               } else {
                      mostrartable.style.display = "none"
               }
            }

            
        function mostrarfm() {

            let mostrarfm = document.getElementById("formulariomo")
               if (mostrarfm.style.display === "none") {
                    mostrarfm.style.display ="block";
               } else {
                      mostrarfm.style.display = "none"
               }
            }
    
            function mostrarlst() {

                let mostrarlst = document.getElementById("listamo")
                   if (mostrarlst.style.display === "none") {
                        mostrarlst.style.display ="block";
                   } else {
                          mostrarlst.style.display = "none"
                   }
                }

