from bs4 import BeautifulSoup
import requests


# Make class for work with web site

class Parse:
    def __init__(self, site):
        self.site = site

    def sabscr(self):
        response = requests.get(self.site, timeout=5)
        content = BeautifulSoup(response.content, "html.parser")
        for tag_linck in content.findAll('a', attrs={"class": "text-bold"}):
            open = tag_linck.text.encode('utf-8')
            print(open)


url = "https://github.com/Roman84asas"
Parse(url).sabscr()