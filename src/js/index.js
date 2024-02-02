const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
console.log(elementoPlataformas);

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo") 
});

