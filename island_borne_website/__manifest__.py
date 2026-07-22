# -*- coding: utf-8 -*-
{
    'name': 'Island Borne Website',
    'version': '19.0.1.1.0',
    'category': 'Website/Theme',
    'summary': 'Complete Island Borne branded homepage and About page with global layout',
    'description': '''
Fresh Island Borne Odoo 19 website foundation built from the original designer source files.
Phase 2 preserves the approved responsive homepage and adds a complete branded About page,
global header/footer, store finder, local fonts, mobile menu, favicon and direct-loading assets
for reliable Cloudpepper deployment. Future updates will add Products and Fragrances pages.
''',
    'author': 'Spxcorp Limited',
    'depends': ['website'],
    'data': [
        'views/island_borne_layout.xml',
        'views/island_borne_homepage.xml',
        'views/island_borne_homepage_page.xml',
        'views/island_borne_about_page.xml',
    ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
