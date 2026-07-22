# -*- coding: utf-8 -*-
{
    'name': 'Island Borne Website',
    'version': '19.0.1.0.7',
    'category': 'Website/Theme',
    'summary': 'Complete Island Borne branded homepage with global header and footer',
    'description': '''
Fresh Island Borne Odoo 19 website foundation built from the original designer source files.
Phase 1 includes the exact responsive homepage, global header/footer, store finder, local fonts,
mobile menu, favicon and direct-loading assets for reliable Cloudpepper deployment.
''',
    'author': 'Spxcorp Limited',
    'depends': ['website'],
    'data': [
        'views/island_borne_layout.xml',
        'views/island_borne_homepage.xml',
        'views/island_borne_homepage_page.xml',
    ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
