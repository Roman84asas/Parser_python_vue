from bs4 import BeautifulSoup
import requests
import json


# Make class for work with web site

class Parse:
    # get url site
    def __init__(self, site):
        self.site = site

    def sabscr(self):
        # request lib. and parse datas of site
        # remember data and komp in json
        # return json data in direct /data
        response = requests.get(self.site, timeout=5)
        content = BeautifulSoup(response.content, "html.parser")
        data_befor = []
        i = 1
        for tag_get in content.findAll('ol', attrs={"class": "pinned-items-list"}):
            for tag_linck in content.findAll('span', attrs={"class": "repo js-pinnable-item"}):
                data = tag_linck.text.encode('utf-8')
                data_str = str(data)[2:-1]
                data_befor.append(data_str)
        with open('../frontend/api/data.json', 'w') as outfile:
            json.dump(data_befor, outfile)
# uri adress a user of Git Hub
url = "https://github.com/Roman84asas"
Parse(url).sabscr()