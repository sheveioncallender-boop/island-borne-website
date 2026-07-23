# -*- coding: utf-8 -*-

from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import Website


class IslandBorneWebsite(Website):
    """Serve the Island Borne page at the website root on every database.

    The module also creates a normal published ``website.page`` at ``/`` for
    Odoo's page management. Rendering the module template here guarantees that
    a stale database homepage setting or fallback menu can never replace it.
    """

    @http.route()
    def index(self, **kw):
        return request.render(
            'island_borne_website.island_borne_homepage_page_template'
        )

    @http.route(
        '/island-borne',
        type='http',
        auth='public',
        website=True,
        sitemap=False,
    )
    def island_borne_legacy_url(self, **kw):
        """Keep old links working while making ``/`` the canonical homepage."""
        return request.redirect('/', code=301)
