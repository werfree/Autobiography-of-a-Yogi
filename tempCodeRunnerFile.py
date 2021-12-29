import requests
from bs4 import BeautifulSoup
URL = r'http://0.0.0.0:5500/index.html'
IMG_URL = "https://yssofindia.org/audiobook/ay-bengali.jpg"
res = requests.get(URL)
soup = BeautifulSoup(res.content, 'html5lib') 

anchors = soup.findAll('a',href=True)
labels = soup.findAll('label')

tracks = []
for i,(anchor,label) in enumerate(zip(anchors,labels)):
    trackObj = {
        "name":label.string[10:],
        "audioUrl":anchor['href'],
        "imageUrl":r"https://yssofindia.org/audiobook/ay-bengali.jpg"
    }
    tracks.append(trackObj)
print(tracks)
