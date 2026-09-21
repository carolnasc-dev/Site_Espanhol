// ==============================
// ELEMENTOS DA PÁGINA
// ==============================
const header = document.querySelector(".header");
const botaoMenu = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const linksMenu = menu.querySelectorAll('a[href^="#"]');
const botaoTopo = document.getElementById("btnTopo");

// Todas as seções que têm id (usadas para saber onde a pessoa está)
const secoes = Array.from(document.querySelectorAll("main section[id], footer[id]"));


// ==============================
// MENU MOBILE (☰ / ✕)
// ==============================
function abrirMenu(abrir) {
    menu.classList.toggle("aberto", abrir);
    botaoMenu.setAttribute("aria-expanded", String(abrir));
    botaoMenu.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
}

// Clique no botão: abre ou fecha
botaoMenu.addEventListener("click", () => {
    abrirMenu(!menu.classList.contains("aberto"));
});

// Clique em um link do menu: fecha (a rolagem suave é feita pelo CSS)
linksMenu.forEach(link => {
    link.addEventListener("click", () => abrirMenu(false));
});

// Clique fora do cabeçalho: fecha
document.addEventListener("click", (evento) => {
    if (!header.contains(evento.target)) {
        abrirMenu(false);
    }
});

// Tecla Esc: fecha e devolve o foco ao botão
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && menu.classList.contains("aberto")) {
        abrirMenu(false);
        botaoMenu.focus();
    }
});

// Se a tela aumentar (ex.: girar o celular), garante o menu fechado
window.matchMedia("(min-width: 861px)").addEventListener("change", (evento) => {
    if (evento.matches) {
        abrirMenu(false);
    }
});


// ==============================
// DESTACAR NO MENU A SEÇÃO ATUAL
// ==============================
function atualizarMenuAtivo() {
    // Linha de referência: logo abaixo do cabeçalho, um pouco para dentro da tela
    const referencia = header.offsetHeight + window.innerHeight * 0.25;

    // A seção atual é a última cujo topo já passou da linha de referência
    let atual = null;
    secoes.forEach(secao => {
        if (secao.getBoundingClientRect().top <= referencia) {
            atual = secao;
        }
    });

    // No fim da página, o rodapé (Contato) é sempre o atual
    const chegouNoFim =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

    if (chegouNoFim) {
        atual = secoes[secoes.length - 1];
    }

    linksMenu.forEach(link => {
        const ativo = atual !== null && link.getAttribute("href") === "#" + atual.id;

        if (ativo) {
            link.setAttribute("aria-current", "true");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}


// ==============================
// BOTÃO DE VOLTAR AO TOPO
// ==============================
function atualizarBotaoTopo() {
    botaoTopo.classList.toggle("visivel", window.scrollY > 600);
}


// ==============================
// ROLAGEM (uma atualização por quadro, para não pesar)
// ==============================
let aguardando = false;

function aoRolar() {
    if (aguardando) return;

    aguardando = true;

    requestAnimationFrame(() => {
        atualizarMenuAtivo();
        atualizarBotaoTopo();
        aguardando = false;
    });
}

window.addEventListener("scroll", aoRolar, { passive: true });
window.addEventListener("resize", aoRolar);

// Estado inicial ao carregar a página
aoRolar();