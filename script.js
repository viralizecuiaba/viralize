// Animação de entrada para os elementos da seção "Quem Somos"
document.addEventListener("DOMContentLoaded", function () {
    const quemSomos = document.querySelector("#quem-somos .texto-quemsomos");
    if (quemSomos) {
        quemSomos.style.opacity = "0";
        quemSomos.style.transform = "translateY(50px)";
        setTimeout(() => {
            quemSomos.style.transition = "opacity 1s ease, transform 1s ease";
            quemSomos.style.opacity = "1";
            quemSomos.style.transform = "translateY(0)";
        }, 500);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const pergunta = item.querySelector(".faq-pergunta");

        pergunta.addEventListener("click", () => {
            // Fecha todas as outras perguntas
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            // Abre ou fecha a pergunta clicada
            item.classList.toggle("active");
        });
    });
});

// Animação de entrada para a seção QUEM SOMOS
document.addEventListener("DOMContentLoaded", function () {
    const quemSomosSection = document.querySelector("#quem-somos");
    const animateElements = document.querySelectorAll("#quem-somos .animate-text");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateElements.forEach((element) => {
                    element.classList.add("visible");
                });
            }
        });
    }, { threshold: 0.5 }); // Dispara a animação quando 50% da seção estiver visível

    if (quemSomosSection) {
        observer.observe(quemSomosSection);
    }
});

// Animação de entrada para os cards de serviços
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateX(-100%)";
    setTimeout(() => {
        card.style.transition = "opacity 1s ease, transform 1s ease";
        card.style.opacity = "1";
        card.style.transform = "translateX(0)";
    }, index * 300); // Delay para cada card
});

// Animação de entrada para os membros da equipe
const membros = document.querySelectorAll(".membro");
membros.forEach((membro, index) => {
    membro.style.opacity = "0";
    membro.style.transform = "translateY(50px)";
    setTimeout(() => {
        membro.style.transition = "opacity 1s ease, transform 1s ease";
        membro.style.opacity = "1";
        membro.style.transform = "translateY(0)";
    }, index * 300); // Delay para cada membro
});

// Animação de hover para o botão "VIRALIZE COM A GENTE"
const botaoEspecialista = document.querySelector(".botao-especialista");
if (botaoEspecialista) {
    botaoEspecialista.addEventListener("mouseenter", () => {
        botaoEspecialista.style.transform = "scale(1.05)";
    });
    botaoEspecialista.addEventListener("mouseleave", () => {
        botaoEspecialista.style.transform = "scale(1)";
    });
}

// Pausa a animação ao passar o mouse sobre o carrossel
const containerCarrossel = document.querySelector(".container-card-carrossel");
const containerCard = document.querySelector(".container-card");

if (containerCarrossel && containerCard) {
    // Pausa a animação ao passar o mouse sobre o carrossel
    containerCarrossel.addEventListener("mouseenter", () => {
        containerCard.style.animationPlayState = "paused";
    });

    // Retoma a animação ao retirar o mouse do carrossel
    containerCarrossel.addEventListener("mouseleave", () => {
        containerCard.style.animationPlayState = "running";
    });

    // Adiciona efeito de destaque ao card específico e volta à posição inicial
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            // Volta o card à posição inicial
            containerCard.style.transform = "translateX(0)";
            // Aplica o efeito de destaque
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            // Remove o efeito de destaque
            card.style.transform = "scale(1)";
        });
    });
}

// Função SLIDE FEEDBACK
let slides = document.querySelectorAll('.slide'); // Seleciona todos os slides
let currentSlide = 0; // Inicia no primeiro slide (índice 0)

// Função para mostrar o slide atual
function showSlide(index) {
    // Oculta todos os slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Mostra o slide atual
    slides[index].classList.add('active');
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide (volta ao início após o último)
    showSlide(currentSlide); // Mostra o slide atualizado
}

// Inicia o slideshow
setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos (5000 milissegundos)

// Mostra o primeiro slide ao carregar a página
showSlide(currentSlide);

// Animação de entrada para o formulário de contato
const contatoForm = document.querySelector(".contato-form");
if (contatoForm) {
    contatoForm.style.opacity = "0";
    contatoForm.style.transform = "translateY(50px)";
    setTimeout(() => {
        contatoForm.style.transition = "opacity 1s ease, transform 1s ease";
        contatoForm.style.opacity = "1";
        contatoForm.style.transform = "translateY(0)";
    }, 500);
}

// Animação de entrada para os cards de clientes
const cardsAtendemos = document.querySelectorAll(".card-atendemos");
cardsAtendemos.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    setTimeout(() => {
        card.style.transition = "opacity 1s ease, transform 1s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 300); // Delay para cada card
});

// Animação de entrada para o visor de frase
const visorFrase = document.querySelector(".visor-frase");
if (visorFrase) {
    visorFrase.style.opacity = "0";
    visorFrase.style.transform = "translateY(50px)";
    setTimeout(() => {
        visorFrase.style.transition = "opacity 1s ease, transform 1s ease";
        visorFrase.style.opacity = "1";
        visorFrase.style.transform = "translateY(0)";
    }, 500);
}