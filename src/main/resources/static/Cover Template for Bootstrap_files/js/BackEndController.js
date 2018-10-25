async function getClima(ciudad){
	await Promise.resolve(axios.get('https://parcialarswdavid.herokuapp.com/weather/'+ciudad)
	.then(async function (response){            
            clima.setClima(response.data);
	}));
}

