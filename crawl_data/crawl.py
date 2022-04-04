from dataclasses import replace
from bs4 import *
import requests as rq
import os 

# req = Request('https://vinepair.com/articles/best-wines-2020', headers={'User-Agent': 'Mozilla/5.0'})
# webpage = urlopen(req).read()

# print(webpage)

# r2 = rq.get('https://vinepair.com/articles/best-wines-202', headers={'User-Agent': 'Mozilla/5.0'})
response = rq.get('https://www.topwine.com.vn', headers={'User-Agent': 'Mozilla/5.0'})
soup = BeautifulSoup(response.text, features='html.parser')

link = []

items = soup.find('div', {'class': 'item'})
# img_items = soup.find_all('div', {'class': 'imgitemproduct'})
uls = soup.find_all('ul', {'class': 'productitem'})

# soup_li = BeautifulSoup(ul, features='html.parser')

# li = soup.find_all('ul', {'class': 'productitem'})

# print(len(img_items))

for ul in uls:
  # soup2 = BeautifulSoup(str(item), features='html.parser')
  # imgs = soup2.select('img')

  for li in ul.find_all('li'):

    item_detail = {
      'link': li.img['src'],
      'desc': li.img['alt'],
      'name': li.h3.find('a').string,
      'price': li.find('p', {'class': 'price'}).string and (li.find('p', {'class': 'price'}).string).replace(' ', '').replace('\r', '').replace('\n', '')
    }
    link.append(item_detail)



with open("file.txt", "w") as f:
    for s in link:
        img_data = rq.get(s['link']).content
        with open(f'wine_data/item/{s["desc"]}.jpg', 'wb') as handler:
            handler.write(img_data)
        f.write(s['link'] +"\n" + s['desc'] +'\n' + (s.get('price') or '')+ '\n\n')
