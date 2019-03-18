from bs4 import BeautifulSoup
import requests
import json


# Make class for work with web site

class Parse:
    def __init__(self, site):
        self.site = site

    def sabscr(self):
        response = requests.get(self.site, timeout=5)
        content = BeautifulSoup(response.content, "html.parser")
        data_befor = []
        i = 1
        for tag_get in content.findAll('ol', attrs={"class": "pinned-items-list"}):
            for tag_linck in content.findAll('span', attrs={"class": "repo js-pinnable-item"}):
                data = tag_linck.text.encode('utf-8')
                data_str = str(data)[2:-1]
                data_befor.append(data_str)
        with open('../frontend/data/data.json', 'w') as outfile:
            json.dump(data_befor, outfile)

url = "https://github.com/Roman84asas"
Parse(url).sabscr()