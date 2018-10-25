var Series = (function(){
	var series = new Array();	
	return{
		addSerie : function(dateSerie, openSerie, highSerie, lowSerie, closeSerie, volumeSerie){
			series.push({date : dateSerie, openS : openSerie, highS : highSerie, lowS : lowSerie, closeS: closeSerie, volumeS : volumeSerie});
		},
		getSeries : function(){
			return series;
		},
		resetAll : function(){
			series = new Array();
		}
	}
})();

async function setTable(){
	var tiempo = document.getElementById("selectTiempo").options[document.getElementById("selectTiempo").selectedIndex].text
	await getSeries(tiempo);
	var m = "<table class='table'><thead>\
				<tr>\
				<th scope='col'>Fecha</th>\
				<th scope='col'>Open</th>\
				<th scope='col'>High</th>\
				<th scope='col'>Low</th>\
				<th scope='col'>Close</th>\
				<th scope='col'>Volume</th>\
				</tr>\
			</thead>\
			<tbody>"
	var i = 0;
	var series = Series.getSeries()
	for(i = 0; i < series.length; i++){
		m += "<tr>\
			<td>"+series[i].date+"</td>\
			<td>"+series[i].openS+"</td>\
			<td>"+series[i].highS+"</td>\
			<td>"+series[i].lowS+"</td>\
			<td>"+series[i].closeS+"</td>\
			<td>"+series[i].volumeS+"</td>\
		</tr>"
	}
	m += "</table>"
	document.getElementById("series").innerHTML = m;
}