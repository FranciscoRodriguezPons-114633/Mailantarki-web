"""Local preview server for MAILANTARKI without browser caching.

python3 -m http.server sends no Cache-Control header, so Chrome may keep old
copies of the JS modules (js/data/projects.js, js/render/*.js) and show stale
content after an edit. This server tells the browser to always revalidate.

Usage (from this folder):  python3 serve.py   ->  http://localhost:8000
"""
import http.server
import socketserver

PORT = 8000


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"MAILANTARKI preview: http://localhost:{PORT}")
    httpd.serve_forever()
