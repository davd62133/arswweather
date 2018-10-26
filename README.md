# arswweather
Heroku: https://parcialarswdavid.herokuapp.com/
Es extendible porque usa injecciones en la aprte de los servidores, y ademas puede usar varios servidores externos, pero si toca cambiar en el javascript el recibimiento de lo objetos JSON
Arquitectura:
Teniendo servidores externos del clima, por medio de http, el servidor propio recibe la informacion de los externos. Despues, teniendo un cliente, solicita la informacion al servidor propio, si este tiene la nfomracion el el cache, lo devuelve, si no, solicita la informacion
