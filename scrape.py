from bs4 import BeautifulSoup
import requests

html_text = requests.get('https://remotehunt.com/fully-remote-companies?sort=featured&order=desc').text
soup = BeautifulSoup(html_text, 'lxml')
jobs = soup.find_all('a', class_='item')


print(jobs)