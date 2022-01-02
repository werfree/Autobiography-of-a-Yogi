import requests
from os import walk
from bs4 import BeautifulSoup
from mutagen.mp3 import MP3

dirAudio = r'/home/werfree/shared/Torrent/Autobiography of a Yogi'
duration = []
for (dirpath, dirnames, filenames) in walk(dirAudio):
    duration.append(filenames)
    break

URL = r'http://0.0.0.0:5500/index.html'
IMG_URL = "https://yssofindia.org/audiobook/ay-bengali.jpg"
res = requests.get(URL)
soup = BeautifulSoup(res.content, 'html5lib') 

anchors = soup.findAll('a',href=True)
labels = soup.findAll('label')

tracks = []
for i,(anchor,label) in enumerate(zip(anchors,labels)):
    splitLabel = label.string.split(" ")
    audio = MP3(dirAudio+"/"+filenames[i])
    trackObj = {
        "name":" ".join(splitLabel[3:]),
        "audioUrl":anchor['href'],
        "imageUrl":r"https://yssofindia.org/audiobook/ay-bengali.jpg",
        "duration":audio.info.length
    }
    tracks.append(trackObj)
print(tracks)
