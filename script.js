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
