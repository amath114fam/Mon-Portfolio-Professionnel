
window.addEventListener('DOMContentLoaded', function () {
    const proposSection = document.querySelector('header');
    const textPropos = document.querySelector('#header');
    const img = document.querySelector('header img');

    if (proposSection) {
        const sectionPosition = proposSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            textPropos.style.opacity = '1';
            textPropos.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            img.style.transform = 'translateX(0)';
        }
    }
});
window.addEventListener("scroll", function () {
    const proposSection = document.querySelector('.competence');
    const textPropos = document.querySelector('#skill1');
    const text2 = document.querySelector('#skill2');

    if (proposSection) {
        const sectionPosition = proposSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            textPropos.style.opacity = '1';
            textPropos.style.transform = 'translateY(0)';
            text2.style.opacity = '1';
            text2.style.transform = 'translateY(0)';
        }
    }
});

window.addEventListener("scroll", function () {
    const studies = document.querySelectorAll('.study');

    studies.forEach((study, index) => {
        setTimeout(() => {
            study.classList.add('visible'); // Ajoute la classe 'visible' après un délai
        }, index * 500); // Délai de 500ms multiplié par l'index pour un effet séquencé
    });
});
// ******************************navigate
const links = document.querySelectorAll(".nav ul li a");

// Fonction pour réinitialiser la couleur des liens
function resetLinkColors() {
    links.forEach(link => {
        link.style.color = ""; // Réinitialise la couleur
    });
}
links.forEach(link => {
    link.addEventListener("click", () => {
        resetLinkColors(); // Réinitialise les couleurs avant de changer
        link.style.color = "#928DAB"; // Change la couleur du lien cliqué
    });
});
//************************************/
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let nam = document.getElementById("name").value
    let maile = document.getElementById("email").value
    let mess = document.getElementById("object").value
    const nomvide = nam.trim() === ""
    const mailvide = maile.trim() === ""
    const messvide = mess.trim() === ""
    if (nomvide || mailvide || messvide) {
        alert("Veillez remplir les formulaires obligatoires(*)");
    } else {
        sendMail();
    }
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("object").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("phone").value = "";
})

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        message: document.getElementById("object").value,
        phone: document.getElementById("phone").value,
    }
    emailjs.send("service_ivh5i3r", "template_bs7eiv6", params).then(alert("Message envoyé avec succès"));
}

const icon = document.getElementById("icon");
const xmark = document.getElementById("exit");
const ul = document.querySelector(".nav ul");
icon.addEventListener("click", () => {
    ul.style.right = "0%";
    icon.style.display = "none"
})
xmark.addEventListener("click", () => {
    ul.style.right = "-100%";
    icon.style.display = "block"
})



