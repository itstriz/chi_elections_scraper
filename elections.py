import requests
from bs4 import BeautifulSoup as bs4

url = 'http://www.chicagoelections.com/en/election3.asp'

rsp = requests.get(url)
html = bs4(rsp.text, 'html.parser')

options = html.find_all('option')

print len(options)