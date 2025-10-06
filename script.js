document.addEventListener('DOMContentLoaded', function() {

    // 1. Gestione della Navbar allo scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Animazione delle schede nella sezione Mission (SOLO DESKTOP)
    const cards = document.querySelectorAll('.mission-desktop .card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Rimuove 'active' solo dalle card del desktop
            cards.forEach(c => c.classList.remove('active'));
            // Aggiunge 'active' alla card cliccata
            card.classList.add('active');
        });
    });

    // 3. Gestione toggle menu su mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('#navbar .nav-links');
    const navItems = document.querySelectorAll('#navbar .nav-links li a');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isOpen = navLinks.classList.contains('active');
            mobileMenu.setAttribute('aria-expanded', isOpen);
            mobileMenu.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Chiudi il menu quando clicchi un link
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.setAttribute('aria-expanded', 'false');
                    mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

    // 4. Gestione Accordion (SOLO MOBILE)
    const accordionItems = document.querySelectorAll('.mission-mobile .accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            // Se c'è un elemento aperto e non è quello cliccato, chiudilo
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                const oldIcon = currentlyActive.querySelector('.accordion-header i');
                oldIcon.classList.remove('fa-minus');
                oldIcon.classList.add('fa-plus');
            }

            // Apri o chiudi l'elemento cliccato
            item.classList.toggle('active');
            const newIcon = header.querySelector('i');
            if (item.classList.contains('active')) {
                newIcon.classList.remove('fa-plus');
                newIcon.classList.add('fa-minus');
            } else {
                newIcon.classList.remove('fa-minus');
                newIcon.classList.add('fa-plus');
            }
        });
    });
    
    // Inizializza le icone dell'accordion al caricamento della pagina
    document.querySelectorAll('.accordion-item').forEach(item => {
        const icon = item.querySelector('.accordion-header i');
        if (item.classList.contains('active')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        }
    });
});