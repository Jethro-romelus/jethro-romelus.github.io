document.addEventListener("DOMContentLoaded", function () {
    // Gestion du formulaire de contact
    const contactSection = document.querySelector(".contact .form-container");
    const sendButton = document.querySelector(".contact .btn");

    if (!contactSection || !sendButton) {
        console.error("❌ Formulaire ou bouton introuvable !");
        return;
    }

    sendButton.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche l'action par défaut

        console.log("📩 Bouton Envoyer cliqué !");

        // Récupération des champs du formulaire
        const inputs = document.querySelectorAll(".contact .input-group input, .contact .input-group textarea");
        let formValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                formValid = false;
                input.style.border = "2px solid red"; // Bordure rouge si vide
            } else {
                input.style.border = ""; // Réinitialisation de la bordure
            }
        });

        if (!formValid) {
            alert("❌ Veuillez remplir tous les champs !");
            return;
        }

        // Vérifier si un message existe déjà
        let successMessage = document.querySelector(".success-message");
        if (!successMessage) {
            successMessage = document.createElement("p");
            successMessage.classList.add("success-message");
            contactSection.appendChild(successMessage); // Ajouter après le formulaire
        }

        // Afficher le message de succès
        successMessage.textContent = "✅ Message envoyé avec succès !";
        successMessage.style.color = "#00e6e6";
        successMessage.style.fontWeight = "bold";
        successMessage.style.marginTop = "10px";
        successMessage.style.textAlign = "center";

        // Réinitialiser le formulaire après 5 secondes
        setTimeout(() => {
            inputs.forEach(input => input.value = ""); // Vide tous les champs
            successMessage.remove();
        }, 5000);
    });

    // Animation du bouton
    sendButton.addEventListener("mouseover", function() {
        sendButton.style.transform = "scale(1.1)";
    });

    sendButton.addEventListener("mouseleave", function() {
        sendButton.style.transform = "scale(1)";
    });

    // Animation des barres de progression
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.transition = "width 2s";
            bar.style.width = width;
        }, 500);
    });

    // ANIMATION TEXTE (Fade-in + Effet Machine à écrire)
    const heroText = document.querySelector(".hero h1");
    const text = heroText.textContent; // Récupérer le texte original
    heroText.textContent = ""; // Vider le texte pour l'effet machine à écrire

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroText.textContent += text[i];
            i++;
            setTimeout(typeWriter, 50); // Vitesse de frappe
        } else {
            heroText.style.opacity = "1"; // S'assurer que le texte est bien visible
        }
    }

    // Appliquer l'effet fade-in et démarrer l'effet machine à écrire
    heroText.style.opacity = "0"; // Commencer invisible
    heroText.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        heroText.style.opacity = "1"; // Apparition progressive
        typeWriter(); // Démarrage de l'effet machine à écrire
    }, 500);
});
