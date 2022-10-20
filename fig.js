document.getElementById('btnDibujar').addEventListener('click', dibujar);

function dibujar(){
	document.getElementById('solucion').innerHTML = "<h3>Entró</h3>"; 
	var b = parseInt(document.querySelector('#txtbase').value),
		a = parseInt(document.querySelector('#txtaltura').value),
		r = parseInt(document.querySelector('#txtradio').value),
		x1 = parseInt(document.querySelector('#txtx1').value),
		y1 = parseInt(document.querySelector('#txty1').value),
		x2 = parseInt(document.querySelector('#txtx2').value),
		y2 = parseInt(document.querySelector('#txty2').value),
		x3 = parseInt(document.querySelector('#txtx3').value),
		y3 = parseInt(document.querySelector('#txty3').value);

		let canvas = document.getElementById("canvas");
		let anchura = canvas.width;
		let altura = canvas.height;
		let cd = canvas.getContext("2d");

		cd.strokeStyle = "Turquoise";	
		cd.lineWidth = 1;
		//cd.fillStyle = 'black';
		//cd.fillStyle = "#0000ff";
		cd.beginPath();
		// cd.fillText(i,x-5,ty+9); 
		// cd.fillText(ecuacion1,x2+5,y2);

		switch(document.getElementById("tipofig").value){
			case '1':	// Rectángulo
				cd.beginPath();
				// cd.fillRect(i*10,i*10,20,20);
				// fillRect(x, y, width, height) : Dibuja un rectángulo con relleno cd.fillStyle
				// (x, y) coordenadas de la esquina superior izquierda del rectángulo
				// width es la anchura del rectángulo
				// height es la altura del rectángulo
				cd.strokeRect(anchura/2,altura/2,b,a);
				break; 
			case '2':  // Círculo
				cd.beginPath();
				var cx = anchura/2, cy=altura/2, ang_ini=0, ang_fin=2*Math.PI;
				cd.arc(cx, cy, r, ang_ini, ang_fin);
				cd.stroke();
				break;
			case '3':	// Triángulo
				alert('hola');
				cd.beginPath();
				cd.moveTo(x1, y1);
				cd.lineTo(x2, y2);
				cd.lineTo(x3, y3);
				cd.lineTo(x1, y1);
				cd.stroke();
				break;
			case '4':  // Línea
				cd.beginPath();
				// alert('hola');
				cd.moveTo(0, 0);
				cd.lineTo(200, 200);
				cd.stroke(); // dibuja el contorno de la trayectoria 
				break;
		}
}





