import urllib.request
from bs4 import BeautifulSoup

##Make class for work with web site
class Scraper:
    def __init__(self, site):
        self.site = site
    
    def scraper (self):
        read_url = urllib.request.urlopen(self.site)
        file_of_html = read_url.read()
        parser = "html.parser"
        html = BeautifulSoup(file_of_html, parser)
        for tag in html.find_all("a"):
            url = tag.get("href")
            if url is None:
                continue
            if "html" in url:
                print("\n", + url)

news = "https://news.google.ru/"
Scraper(news).scraper