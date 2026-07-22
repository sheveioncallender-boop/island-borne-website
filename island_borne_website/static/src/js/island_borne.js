(function () {
    'use strict';

    function initMobileMenu() {
        const header = document.querySelector('.ib-site-header');
        const toggle = document.querySelector('.ib-menu-toggle');
        const nav = document.querySelector('.ib-mobile-nav');
        if (!header || !toggle || !nav) return;

        const closeMenu = function () {
            header.classList.remove('is-mobile-menu-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open navigation');
        };

        toggle.addEventListener('click', function () {
            const isOpen = header.classList.toggle('is-mobile-menu-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeMenu();
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 767) closeMenu();
        });
    }

    function initStoreFinder() {
        const section = document.querySelector('.ib-store-finder');
        if (!section) return;

        const searchForm = section.querySelector('.ib-store-search');
        const searchInput = section.querySelector('#ib-store-search-input');
        const cards = Array.from(section.querySelectorAll('.ib-store-card'));
        const map = section.querySelector('#ib-store-map');

        const activateCard = function (card) {
            cards.forEach(function (item) {
                item.classList.toggle('is-active', item === card);
            });

            if (map && card.dataset.mapQuery) {
                map.src = 'https://www.google.com/maps?q=' + encodeURIComponent(card.dataset.mapQuery) + '&output=embed';
            }
        };

        cards.forEach(function (card) {
            card.addEventListener('click', function () {
                activateCard(card);
            });
        });

        const filterStores = function () {
            const query = (searchInput.value || '').trim().toLowerCase();
            let firstVisible = null;

            cards.forEach(function (card) {
                const matches = !query || card.textContent.toLowerCase().includes(query);
                card.hidden = !matches;
                if (matches && !firstVisible) firstVisible = card;
            });

            const activeVisible = cards.find(function (card) {
                return card.classList.contains('is-active') && !card.hidden;
            });

            if (!activeVisible && firstVisible) activateCard(firstVisible);
        };

        if (searchInput) searchInput.addEventListener('input', filterStores);
        if (searchForm) {
            searchForm.addEventListener('submit', function (event) {
                event.preventDefault();
                filterStores();
                const firstVisible = cards.find(function (card) { return !card.hidden; });
                if (firstVisible) activateCard(firstVisible);
            });
        }
    }

    function initNewsletter() {
        const form = document.querySelector('.ib-newsletter-form');
        if (!form) return;
        const message = document.querySelector('.ib-newsletter-message');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = form.querySelector('input[type="email"]');
            if (!email || !email.checkValidity()) {
                if (email) email.reportValidity();
                return;
            }
            if (message) message.textContent = 'Thank you for staying connected.';
            form.reset();
        });
    }

    function init() {
        initMobileMenu();
        initStoreFinder();
        initNewsletter();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
