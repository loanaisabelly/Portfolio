// Função para alternar entre os temas claro e escuro
function mudarBackground() {
    // Obtendo o elemento do corpo da página e o ícone
    var body = document.body;
    var themeIcon = document.getElementById("themeIcon");

    // Verifica se o corpo está com o tema escuro
    if (body.classList.contains("dark-mode")) {
        // Se estiver no tema escuro, alteramos para o tema claro
        body.classList.remove("dark-mode");  // Remover classe do tema escuro
        body.classList.add("light-mode");  // Adicionar classe do tema claro

        // Troca o ícone para a estrela
        themeIcon.classList.remove("fas", "fa-moon");
        themeIcon.classList.add("fas", "fa-star");

        // Alterar as cores manualmente no tema claro (em caso de necessidade)
        body.style.backgroundColor = "rgba(224, 213, 213, 0.8)";
        body.style.color = "black";  // Cor do texto para preto
    } else {
        // Se estiver no tema claro, alteramos para o tema escuro
        body.classList.remove("light-mode");  // Remover classe do tema claro
        body.classList.add("dark-mode");  // Adicionar classe do tema escuro

        // Troca o ícone para a lua
        themeIcon.classList.remove("fas", "fa-star");
        themeIcon.classList.add("fas", "fa-moon");

        // Alterar as cores manualmente no tema escuro
        body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";  // Cor de fundo para escuro
        body.style.color = "white";  // Cor do texto para branco
    }
}


