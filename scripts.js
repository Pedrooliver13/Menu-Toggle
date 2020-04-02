//menu responsivo
let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector('.menu-toggle')

menuToggle.addEventListener('click', ()=>{
  document.body.style.overflow = show ? "hidden":"initial"; // se for true ele libera hidden , se não initial

  menuSection.classList.toggle('on', show) // na primeira vez que clicar ele(show) vai estar como true , então ele só vai reforça o comando de colocar a class on 

  show = !show;//e ele vai receber false, na proxima vez o toggle vai saber que tem de tirar a class on,isso tudo ,para evitar de fazer a funcionar sem eu mandar

})
