let clique = document.getElementById("modo")

// Ao carregar a página, aplica o darkmode se estava salvo
if (localStorage.getItem("darkmode") === "true") {
    document.body.classList.add("darkmode")
}

clique.addEventListener("click", () => {
    document.body.classList.toggle("darkmode")
    
    // Salva no localStorage o estado atual
    localStorage.setItem("darkmode", document.body.classList.contains("darkmode"))
})



addEventListener("DOMContentLoaded", () => {
    const numText = 10; // Assuming numText is 10, adjust as needed
    const rng = Math.floor(Math.random() * numText); // Corrected Math.random usage

    // Use a switch statement for better readability
    switch (rng) {
        case 0:
            document.body.id = "zero";
            break;
        case 1:
            document.body.id = "um";
            break;
        case 2:
            document.body.id = "dois";
            break;
        case 3:
            document.body.id = "tres";
            break;
        case 4:
            document.body.id = "quatro";
            break;
        case 5:
            document.body.id = "cinco";
            break;
        case 6:
            document.body.id = "seis";
            break;
        case 7:
            document.body.id = "sete";
            break;
        case 8:
            document.body.id = "oito";
            break;
        case 9:
            document.body.id = "nove";
            break;
    }
});


document.querySelectorAll("input, textarea").forEach((element) => {
    element.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Impede o comportamento padrão do Enter
            element.blur(); // Remove o foco do campo atual
        }
    });
});

function Enviar() {
    const emailInput = document.getElementById("mail");
    if (emailInput && emailInput.value.includes("@")) {
        alert("Enviado com sucesso");
    } else {
        alert("Por favor, insira um e-mail válido");
    }
}
