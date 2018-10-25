var clima = (function(){
	var clima;	
	return{
		setClima : function(tiempo){                    
                    clima = tiempo;
		},
                getClima : function(){
                    return clima;
                },
		resetAll : function(){
			clima = 0;
		}
	}
})();

async function inicio(){
    await getClima(document.getElementById("ciudad").value);
    setInfo();
}

function setInfo(){
    var m = "";
    m += "Las coordenadas son: latitud " + clima.getClima().coord.lat+" Longitud "+clima.getClima().coord.lon;
    m+= "Clima: " + clima.getClima().weather[0].main + " description: " + clima.getClima().weather[0].description;
    document.getElementById("orders").innerHTML = m;
}

