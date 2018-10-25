async function getSeries(tiempo){
	Series.resetAll();
	console.log(tiempo);
	if(tiempo == "Day"){
		tiempo = "Day";
		await getDay(tiempo);
	}else if(tiempo == "Intradat"){
		tiempo = "Intradat";
		await getIntradat(tiempo);
	}else if(tiempo == "Week"){
		tiempo = "Week";
		await getWeek(tiempo);
	}else if(tiempo == "Month"){
		tiempo = "Month";
		await getMonth(tiempo);
	}
}

async function getDay(tiempo){
	await Promise.resolve(axios.get('http://parcialarswdavid.herokuapp.com/mercado/'+tiempo)
	.then(async function (response){
		var i = 0;		
		var data = response.data["Time Series (Daily)"];		
		var dates = Object.keys(data);
		for(i = 0; i < dates.length; i++){
			Series.addSerie(dates[i], data[dates[i]]["1. open"], data[dates[i]]["2. high"],  
			data[dates[i]]["3. low"], data[dates[i]]["4. close"], data[dates[i]]["5. volume"]);
		}			
	}));
}

async function getIntradat(tiempo){
	await Promise.resolve(axios.get('http://parcialarswdavid.herokuapp.com/mercado/'+tiempo)
	.then(async function (response){
		var i = 0;		
		var data = response.data["Time Series (5min)"];		
		var dates = Object.keys(data);
		for(i = 0; i < dates.length; i++){
			Series.addSerie(dates[i], data[dates[i]]["1. open"], data[dates[i]]["2. high"],  
			data[dates[i]]["3. low"], data[dates[i]]["4. close"], data[dates[i]]["5. volume"]);
		}			
	}));
}

async function getWeek(tiempo){
	await Promise.resolve(axios.get('http://parcialarswdavid.herokuapp.com/mercado/'+tiempo)
	.then(async function (response){
		var i = 0;		
		var data = response.data["Weekly Time Series"];		
		var dates = Object.keys(data);
		for(i = 0; i < dates.length; i++){
			Series.addSerie(dates[i], data[dates[i]]["1. open"], data[dates[i]]["2. high"],  
			data[dates[i]]["3. low"], data[dates[i]]["4. close"], data[dates[i]]["5. volume"]);
		}			
	}));
}

async function getMonth(tiempo){
	await Promise.resolve(axios.get('http://parcialarswdavid.herokuapp.com/mercado/'+tiempo)
	.then(async function (response){
		var i = 0;		
		var data = response.data["Monthly Time Series"];		
		var dates = Object.keys(data);
		for(i = 0; i < dates.length; i++){
			Series.addSerie(dates[i], data[dates[i]]["1. open"], data[dates[i]]["2. high"],  
			data[dates[i]]["3. low"], data[dates[i]]["4. close"], data[dates[i]]["5. volume"]);
		}			
	}));
}