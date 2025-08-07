#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser
from urllib.parse import urlparse

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)
    
    def do_GET(self):
        # Parse the URL
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # Serve root as index.html
        if path == '/':
            self.path = '/index.html'
        
        # Handle image requests for attached_assets
        if path.startswith('/attached_assets/') or path.startswith('../attached_assets/'):
            # Remove the '../' prefix if present
            clean_path = path.replace('../', '')
            if clean_path.startswith('/'):
                clean_path = clean_path[1:]
            
            # Check if file exists in current directory
            if os.path.exists(clean_path):
                self.path = '/' + clean_path
            else:
                # Try without the attached_assets prefix in images folder
                img_path = clean_path.replace('attached_assets/', 'images/attached_assets/')
                if os.path.exists(img_path):
                    self.path = '/' + img_path
        
        return super().do_GET()
    
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

def run_server(port=8080):
    """Run the simple website server"""
    
    # Change to the simple-website directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print(f"Starting Air Box Teknologi website server...")
    print(f"Server will run on http://localhost:{port}")
    print(f"Press Ctrl+C to stop the server")
    
    with socketserver.TCPServer(("", port), CustomHTTPRequestHandler) as httpd:
        print(f"\nServer started successfully!")
        print(f"Open your browser and navigate to: http://localhost:{port}")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    run_server()