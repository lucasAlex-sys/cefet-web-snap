document.getElementById("visibilidade-das-marcacoes").addEventListener("change", function (e) {
        let ocultarMarcacoes = document.getElementsByClassName("marcacao")[0].parentElement
        ocultarMarcacoes.classList.toggle('marcacoes-ocultas')
    })
    
let eventClick = document.querySelector("#img"); 
let xDown = 0
let yDown = 0
let xUp = 0
let yUp = 0

eventClick.addEventListener('mousedown', function(e) {
    let eventClick = e.currentTarget;
    xDown =  parseInt(e.pageX);
    yDown = e.pageY;
    //divEl.innerHTML = "mouse down - ";
    console.log(yDown)
    console.log(xDown)
  });
  
  eventClick.addEventListener('mouseup', function(e) {
    let eventClick = e.currentTarget;
    xUp =  e.pageX;
    yUp = e.pageY;
    console.log(xUp)
    console.log(yUp)
  });