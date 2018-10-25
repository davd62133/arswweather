async function getClima(ciudad){
	await Promise.resolve(axios.get('http://localhost:8080/weather/'+ciudad)
	.then(async function (response){            
            clima.setClima(response.data);
	}));
}

