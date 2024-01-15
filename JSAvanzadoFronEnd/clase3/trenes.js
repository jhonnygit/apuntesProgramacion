var trenesOperativos = 8;
var totalTrenes = 15;
var diaSemana = "Sábado";

function estadoDetalle () {
	if (!trenesOperativos > 0){
	console.log("IMPORTANTE: Ningún tren esta funcionando");
	return;
	} else if (trenesOperativos == totalTrenes){
		console.log("Todos los trenes estan funcionando");
		return;
	}
	
	for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
		if(numeroTren === 10 || numeroTren === 12){
		console.info("IMPORTANTE: El tren número " + numeroTren + " es nocturno");
		} else if(numeroTren === 13){
		console.log("El tren fiestero (12+1) " + (diaSemana === "Sábado" ? "esta funcionando" : "funcionará el sábado"));
		} else {
  		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
		}	
	};
};

estadoDetalle();