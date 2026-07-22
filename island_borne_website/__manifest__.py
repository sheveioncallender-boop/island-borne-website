# -*- coding: utf-8 -*-
{
    'name': 'Island Borne Website',
    'version': '19.0.1.2.0',
    'category': 'Website/Theme',
    'summary': 'Complete Island Borne branded homepage, About and Products pages',
    'description': '''
Fresh Island Borne Odoo 19 website foundation built from the original designer source files.
Phase 3 preserves the approved responsive homepage and About page, and adds a complete
branded Products page for the Clean Clean shower gels and Smooth Smooth lotions. The module
keeps the global header/footer, store finder, local fonts, mobile menu, favicon and direct-loading
assets for reliable Cloudpepper deployment. A future update will add the Fragrances page.
''',
    'author': 'Spxcorp Limited',
    'depends': ['website'],
    'data': [
        'views/island_borne_layout.xml',
        'views/island_borne_homepage.xml',
        'views/island_borne_homepage_page.xml',
        'views/island_borne_about_page.xml',
        'views/island_borne_products_page.xml',
    ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
