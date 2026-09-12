* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {
    --cor-preto: #121212;
    --cor-marrom: #5c4033;
    --cor-branco: #F9F6F0;
    --cor-branco-puro: #FFFFFF;
    --cor-cinza: #666666;
    --fonte-titulo: 'Cinzel', serif;
    --fonte-texto: 'Montserrat', sans-serif;
}

body {
    font-family: var(--fonte-texto);
    background-color: var(--cor-branco);
    color: var(--cor-preto);
    line-height: 1.6;
}

h2 {
    font-family: var(--fonte-titulo);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    padding-bottom: 15px;
}

h2::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--cor-marrom);
    margin: 15px auto 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

section, footer {
    padding: 90px 20px;
}

section > *, footer > * {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

/* ===== HEADER ===== */
header {
    background-color: var(--cor-preto);
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.marca {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-box {
    width: 45px;
    height: 45px;
    border: 1px solid var(--cor-marrom);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--cor-marrom);
    font-family: var(--fonte-titulo);
    font-weight: bold;
}

.titulo h2 {
    font-size: 1.1rem;
    color: var(--cor-branco);
    margin-bottom: 0;
    padding-bottom: 0;
    text-align: left;
}

.titulo h2::after {
    display: none;
}

.subtitulo {
    font-size: 0.65rem;
    color: #AAAAAA;
    letter-spacing: 1px;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    color: var(--cor-branco);
    text-decoration: none;
    cursor: pointer;
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--cor-marrom);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--cor-branco);
    font-size: 1.5rem;
    cursor: pointer;
}

/* ===== HERO ===== */
main {
    background-color: var(--cor-preto);
    color: var(--cor-branco);
    padding: 130px 20px;
    text-align: center;
}

.metodo {
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--cor-marrom);
    font-weight: 600;
    margin-bottom: 15px;
}

.headline {
    font-family: var(--fonte-titulo);
    font-size: 2.8rem;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-bottom: 25px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
}

.descricao {
    color: #CCCCCC;
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto 40px;
}

.botoes {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.btn-preencher, .btn-contorno {
    display: inline-block;
    padding: 15px 30px;
    text-decoration: none;
    cursor: pointer;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: var(--fonte-texto);
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-preencher {
    background-color: var(--cor-marrom);
    color: var(--cor-branco-puro);
    border: 1px solid var(--cor-marrom);
}

.btn-preencher:hover {
    background-color: transparent;
    color: var(--cor-marrom);
}

.btn-contorno {
    background: none;
    border: 1px solid var(--cor-branco);
    color: var(--cor-branco);
}

.btn-contorno:hover {
    background-color: var(--cor-branco);
    color: var(--cor-preto);
}

/* botão de contorno usado sobre fundo claro precisa de cor escura */
#aulas .btn-contorno, #conteudo .btn-contorno {
    border-color: var(--cor-preto);
    color: var(--cor-preto);
}

#aulas .btn-contorno:hover, #conteudo .btn-contorno:hover {
    background-color: var(--cor-preto);
    color: var(--cor-branco);
}

/* ===== SOBRE ===== */
#sobre {
    background-color: var(--cor-branco-puro);
}

.apresentacao-label {
    text-align: center;
    color: var(--cor-marrom);
    letter-spacing: 2px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 5px;
}

.sobre-conteudo {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    flex-wrap: wrap;
}

.foto-sobre {
    width: 300px;
    max-width: 100%;
    object-fit: cover;
    border: 2px solid var(--cor-marrom);
}

.sobre-texto {
    flex: 1;
    min-width: 280px;
}

.sobre-texto h3 {
    font-family: var(--fonte-titulo);
    color: var(--cor-marrom);
    margin: 20px 0 10px;
    font-size: 1.2rem;
}

.sobre-texto p {
    color: #444;
}

.sobre-texto ul {
    margin-left: 20px;
    margin-bottom: 10px;
    color: #444;
}

/* ===== HABILIDADES ===== */
#habilidades {
    background-color: var(--cor-branco);
}

.habilidades-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.habilidade-card {
    background-color: var(--cor-branco-puro);
    padding: 40px 25px;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    cursor: default;
}

.habilidade-card:hover {
    transform: translateY(-8px);
    border-bottom-color: var(--cor-marrom);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
}

.habilidade-icon {
    font-size: 2rem;
    color: var(--cor-marrom);
    margin-bottom: 20px;
    transition: transform 0.3s ease;
}

.habilidade-card:hover .habilidade-icon,
.conteudo-card:hover .habilidade-icon {
    transform: scale(1.15);
}

.habilidade-card h3 {
    font-family: var(--fonte-titulo);
    font-size: 1.05rem;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
}

.habilidade-card p {
    font-size: 0.9rem;
    color: var(--cor-cinza);
}

.notice-badge {
    text-align: center;
    margin-top: 40px;
    font-size: 0.9rem;
    font-style: italic;
    color: var(--cor-marrom);
}

/* ===== PLANOS ===== */
#aulas {
    background-color: var(--cor-branco-puro);
}

.planos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.plano-card {
    background-color: var(--cor-branco);
    border: 1px solid rgba(0, 0, 0, 0.06);
    padding: 35px 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.plano-card.destaque {
    border: 1px solid var(--cor-marrom);
}

.plano-card h3 {
    font-family: var(--fonte-titulo);
    color: var(--cor-preto);
    font-size: 1.15rem;
}

.plano-desc {
    color: var(--cor-cinza);
    font-size: 0.85rem;
}

.plano-preco {
    font-family: var(--fonte-titulo);
    font-size: 1.5rem;
    color: var(--cor-marrom);
}

.plano-preco span {
    font-size: 0.7rem;
    font-family: var(--fonte-texto);
    color: var(--cor-cinza);
}

.plano-card ul {
    list-style: none;
    font-size: 0.85rem;
    color: #555;
    flex-grow: 1;
}

.plano-card ul li {
    margin-bottom: 8px;
}

.plano-card ul li i {
    color: var(--cor-marrom);
    margin-right: 8px;
    font-size: 0.75rem;
}

.plano-card a {
    text-align: center;
    margin-top: 10px;
}

/* ===== CONTEÚDO GRATUITO ===== */
#conteudo {
    background-color: var(--cor-branco);
}

.conteudo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
}

.conteudo-card {
    background-color: var(--cor-branco-puro);
    padding: 35px 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.conteudo-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
}

.conteudo-card h3 {
    font-family: var(--fonte-titulo);
    color: var(--cor-marrom);
    font-size: 1.1rem;
}

.conteudo-card p {
    font-size: 0.9rem;
    color: var(--cor-cinza);
}

.conteudo-card a {
    margin-top: auto;
}

/* ===== DEPOIMENTOS ===== */
#depoimentos {
    background-color: var(--cor-branco-puro);
}

.depoimentos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.depoimento-card {
    background-color: var(--cor-branco);
    padding: 30px;
    border-left: 3px solid var(--cor-marrom);
}

.depoimento-card p {
    font-style: italic;
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 15px;
}

.aluno-nome {
    font-family: var(--fonte-titulo);
    color: var(--cor-preto);
    font-weight: bold;
    text-align: right;
    font-size: 0.9rem;
}

/* ===== CONTATO ===== */
footer {
    background-color: var(--cor-preto);
    color: var(--cor-branco);
    text-align: center;
}

footer h2 {
    color: var(--cor-branco);
}

.telefone {
    margin: 15px 0;
    color: #CCCCCC;
}

footer .btn-preencher {
    margin-top: 10px;
}

.copyright {
    margin-top: 40px;
    font-size: 0.8rem;
    color: #888;
}

/* ===== RESPONSIVO ===== */
@media (max-width: 768px) {
    .headline {
        font-size: 2rem;
    }

    .menu-toggle {
        display: block;
    }

    nav {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--cor-preto);
        padding: 20px;
        gap: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    nav.aberto {
        display: flex;
    }

    .sobre-conteudo {
        flex-direction: column;
        align-items: center;
    }
}