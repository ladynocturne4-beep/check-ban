function checkNumber() {
    const number = document.getElementById("number").value.trim();
    const result = document.getElementById("result");

    if (number === "") {
        result.style.color = "#ff4d4d";
        result.innerHTML = "⚠️ Veuillez entrer un numéro.";
        return;
    }

    const banned = Math.random() < 0.3;

    if (banned) {
        result.style.color = "#ff4d4d";
        result.innerHTML = "❌ Démonstration : ce numéro est affiché comme banni.";
    } else {
        result.style.color = "#25D366";
        result.innerHTML = "✅ Démonstration : ce numéro est affiché comme non banni.";
    }
}