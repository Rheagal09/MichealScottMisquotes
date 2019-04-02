import urllib.request
wiki = "https://quotecatalog.com/communicator/michael-scott/"
page=urllib.request.urlopen(wiki)
from bs4 import BeautifulSoup
soup = BeautifulSoup(page)
a_tag=soup.find_all('a',{'class':'quote__text'})
A=[]
for a in a_tag:
    A.append(a.text)