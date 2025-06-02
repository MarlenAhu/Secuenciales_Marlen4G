function prob1(){
    const agua = parseFloat(document.getElementById("agua").value);
    const mc = parseFloat(document.getElementById("mc").value);

    const resultado = agua * mc;
    document.getElementById("resul").innerText= "Su consumo de agua es: " + resultado;
};

function prob2(){
    const precio = parseFloat(document.getElementById("precio").value);
    const KW = parseFloat(document.getElementById("KW").value);

    const resultado = precio * KW;
    document.getElementById("resul").innerText= "Su consumo de energia es: " + resultado;
};

function prob3(){
    const precio = parseFloat(document.getElementById("precio").value);

    const preciodesc = precio * 0.8;
    const preciofinal = preciodesc * 1.15;
    
    document.getElementById("resul1").innerText= "El precio con descuento es: " + preciodesc;
    document.getElementById("resul2").innerText= "El precio total con IVA es:" + preciofinal;
};

function prob4(){
    const sueldo = parseFloat(document.getElementById("sueldo").value);

    const ahorro = sueldo * 0.15;
    const ahorrofinal = ahorro * 48;
    
    document.getElementById("resul1").innerText= "El ahorro por semana es: " + ahorro;
    document.getElementById("resul2").innerText= "El ahorro al año es:" + ahorrofinal;
};

function prob5(){
    const dias = parseFloat(document.getElementById("dias").value);
    const preciohotel = parseFloat(document.getElementById("preciohotel").value);
    const preciocomida = parseFloat(document.getElementById("preciocomida").value);

    const gastoxdia = preciohotel + preciocomida + 100;
    const gastototal = gastoxdia * dias;
    const comidadias = preciocomida * dias;
    const hoteldias = preciohotel * dias;
    const dinextra = 100 * dias;
    
    document.getElementById("resul1").innerText= "El gasto por dia es: " + gastoxdia;
    document.getElementById("resul2").innerText= "El gasto total es:" + gastototal;
    document.getElementById("resul3").innerText= "El gasto de comida por esos dias es: " + comidadias;
    document.getElementById("resul4").innerText= "El gasto del hotel por esos dias es: " + hoteldias;
    document.getElementById("resul5").innerText= "El dinero extra proporcionado por esos dias es (eran 100 diarios): " + dinextra;
};

function prob6(){
    const V = parseFloat(document.getElementById("Voltaje").value);
    const I = parseFloat(document.getElementById("corriente1").value);

    const P = V * I;
    
    document.getElementById("potenciaRes").innerText= "El valor de P es: " + P;
};

function prob66(){
    const R = parseFloat(document.getElementById("Resistencia").value);
    const I = parseFloat(document.getElementById("corriente2").value);

    const V = R * I;
    
    document.getElementById("voltajeRes").innerText= "El valor de V es: " + V;
};

function prob7(){
    const lado = parseFloat(document.getElementById("lado").value);

    const area = lado * lado;
    
    document.getElementById("resul").innerText= "El area del cuadrado es: " + area;
};

function prob8(){
    const E1 = parseFloat(document.getElementById("E1").value);
    const E2 = parseFloat(document.getElementById("E2").value);
    const E3 = parseFloat(document.getElementById("E3").value);

    const R1 = E1 * 0.25;
    const R2 = E2 * 0.25;
    const R3 = E3 * 0.5;
    const PF = R1+R2+R3;
    document.getElementById("resul").innerText= "El promedio final es: " + PF;
};

function prob9(){
    const años = parseFloat(document.getElementById("años").value);
    
    const meses = años * 12;
    const semanas = años * 52;
    const dias = años * 365;
    const horas = años * 8760;
    
    document.getElementById("resul1").innerText= "Los meses que ha vivido son: " + meses;
    document.getElementById("resul2").innerText= "Las semanas que ha vivido son: " + semanas;
    document.getElementById("resul3").innerText= "Los dias que ha vivido son: " + dias;
    document.getElementById("resul4").innerText= "Las horas que ha vivido son: " + horas;
};

function prob10(){
    const precio = parseFloat(document.getElementById("precio").value);
    const minutos = parseFloat(document.getElementById("minutos").value);

    const preciollam = precio * minutos;
    document.getElementById("resul").innerText= "El costo de su llamada es: " + preciollam + " pesos";
};

function prob11(){
    const preciodia = parseFloat(document.getElementById("preciodia").value);
    const totaldias = parseFloat(document.getElementById("totaldias").value);

    const preciototal = preciodia * totaldias;
    document.getElementById("resul").innerText = "El costo de su estancia es: " + "$"+preciototal;
}

