# -*- coding: utf-8 -*-
{
    'name': 'Island Borne Website',
    'version': '1.3.3',
    'category': 'Website/Theme',
    'summary': 'Complete Island Borne branded website with Home, About, Products and Fragrances',
    'description': '''
Complete Island Borne Odoo 19 website built from the original designer source files.
Phase 4 preserves the approved responsive homepage, About page and Products page, and adds
an immersive Fragrances page for the Cool, Juicy and Yummy scent moods. The module includes
the reusable global header/footer, interactive store finder, local brand fonts, mobile menu,
favicon and direct-loading assets for reliable Cloudpepper deployment.
''',
    'author': 'Spxcorp Limited',
    'depends': ['website'],
    'data': [
        'views/island_borne_layout.xml',
        'views/island_borne_homepage.xml',
        'views/island_borne_homepage_page.xml',
        'views/island_borne_about_page.xml',
        'views/island_borne_products_page.xml',
        'views/island_borne_fragrances_page.xml',
    ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
