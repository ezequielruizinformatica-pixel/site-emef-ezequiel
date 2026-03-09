document.addEventListener("DOMContentLoaded", () => {

/* ========================= */
/* VIDEO AUTO PLAY */
/* ========================= */

const video = document.getElementById('videoInstitucional');

if(video){

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){
video.play();
}else{
video.pause();
}

});

}, { threshold: 0.6 });

observer.observe(video);

}


/* ========================= */
/* ANIMAÇÃO AO ROLAR */
/* ========================= */

function revealOnScroll(){

const reveals = document.querySelectorAll('.reveal');

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add('active');
}

}

}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


/* ========================= */
/* LIGHTBOX */
/* ========================= */

const imagensProjetos = document.querySelectorAll('#projetos img');
const lightbox = document.getElementById('lightbox');
const imgAmpliada = document.getElementById('img-ampliada');
const fechar = document.querySelector('.fechar');

if(imagensProjetos){

imagensProjetos.forEach(img => {

img.addEventListener('click', () => {

lightbox.style.display = 'flex';
imgAmpliada.src = img.src;

});

});

}

if(fechar){

fechar.addEventListener('click', () => {

lightbox.style.display = 'none';

});

}

if(lightbox){

lightbox.addEventListener('click', (e) => {

if(e.target !== imgAmpliada){

lightbox.style.display = 'none';

}

});

}


/* ========================= */
/* MODO ESCURO */
/* ========================= */

const botaoDark = document.getElementById("toggleDark");

if(botaoDark){

botaoDark.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

const icone = botaoDark.querySelector("i");

if(document.body.classList.contains("dark-mode")){
icone.classList.remove("fa-moon");
icone.classList.add("fa-sun");
}else{
icone.classList.remove("fa-sun");
icone.classList.add("fa-moon");
}

});

}


/* ========================= */
/* BOTÃO TOPO */
/* ========================= */

const botaoTopo = document.getElementById("topo");

if(botaoTopo){

window.addEventListener("scroll", () => {

if(window.scrollY > 300){
botaoTopo.classList.add("show");
}else{
botaoTopo.classList.remove("show");
}

});

}


/* ========================= */
/* CONTADOR IDEB */
/* ========================= */

const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

const atualizar = () => {

const valorFinal = parseFloat(contador.getAttribute("data-numero"));
let valorAtual = parseFloat(contador.innerText);

const incremento = valorFinal / 60;

if(valorAtual < valorFinal){

valorAtual += incremento;

contador.innerText = valorAtual.toFixed(1);

setTimeout(atualizar, 30);

}else{

contador.innerText = valorFinal.toFixed(1);

}

};

atualizar();

});

});
