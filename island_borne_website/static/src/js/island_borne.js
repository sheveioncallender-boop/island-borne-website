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


    function normalizeFooterSocialIcons() {
        const footer = document.querySelector('.ib-site-footer');
        if (!footer) return;

        const socials = footer.querySelector('.ib-footer-socials');
        if (!socials) return;

        const iconSize = window.innerWidth <= 767 ? '28px' : '30px';
        const iconAssets = [
            {
                selector: 'a[href*="instagram.com"]',
                src: '/island_borne_website/static/src/img/instagram_footer.svg'
            },
            {
                selector: 'a[href*="tiktok.com"]',
                src: '/island_borne_website/static/src/img/tiktok_footer.svg'
            }
        ];

        iconAssets.forEach(function (item) {
            const anchor = socials.querySelector(item.selector);
            if (!anchor) return;

            let image = anchor.querySelector('img.ib-footer-social-image');
            if (!image) {
                image = document.createElement('img');
                image.className = 'ib-footer-social-image';
                image.alt = '';
                image.setAttribute('aria-hidden', 'true');
                anchor.replaceChildren(image);
            }
            image.src = item.src;
            image.width = parseInt(iconSize, 10);
            image.height = parseInt(iconSize, 10);

            [anchor, image].forEach(function (element) {
                element.style.setProperty('width', iconSize, 'important');
                element.style.setProperty('height', iconSize, 'important');
                element.style.setProperty('min-width', iconSize, 'important');
                element.style.setProperty('min-height', iconSize, 'important');
                element.style.setProperty('max-width', iconSize, 'important');
                element.style.setProperty('max-height', iconSize, 'important');
                element.style.setProperty('flex', '0 0 ' + iconSize, 'important');
                element.style.setProperty('transform', 'none', 'important');
            });
        });

        const threads = socials.querySelector('a[href*="threads.net"]');
        if (threads) {
            threads.style.setProperty('width', iconSize, 'important');
            threads.style.setProperty('height', iconSize, 'important');
            threads.style.setProperty('min-width', iconSize, 'important');
            threads.style.setProperty('max-width', iconSize, 'important');
            threads.style.setProperty('flex', '0 0 ' + iconSize, 'important');
            threads.style.setProperty('font-size', window.innerWidth <= 767 ? '29px' : '31px', 'important');
            threads.style.setProperty('line-height', window.innerWidth <= 767 ? '25px' : '27px', 'important');
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
        normalizeFooterSocialIcons();
        window.setTimeout(normalizeFooterSocialIcons, 250);
        window.setTimeout(normalizeFooterSocialIcons, 1000);
        window.addEventListener('resize', normalizeFooterSocialIcons);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
