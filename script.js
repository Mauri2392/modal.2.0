const navLinks = document.querySelectorAll('.nav-link');

// Añadir clase 'active' al enlace clickeado
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Actualizar la clase 'active' en función del scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Desplazamiento suave al hacer click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funciones para el modal
function openModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var modalTitle = document.getElementById("modal-title");
    var modalDesc = document.getElementById("modal-desc");
    var modalPrice = document.getElementById("modal-price");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    modalTitle.textContent = "Pizza común"; // Asigna el título
    modalDesc.textContent = "Las más ricas del mundo." ; // Asigna la descripción
    modalPrice.textContent = "5 euros"; // Asigna el precio
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
