"use strict";


function MostrarPiso() {
        let clickPiso = document.getElementById("clickPiso");

        let largo = document.getElementById("largo");      
        largo.style.display = clickPiso.checked ? "block" : "none";

        let ancho = document.getElementById("ancho");      
        ancho.style.display = clickPiso.checked ? "block" : "none";

        let calc = document.getElementById("calc");      
        calc.style.display = clickPiso.checked ? "block" : "none";

        let botonCalcPiso = document.getElementById("botonCalcPiso");      
        botonCalcPiso.style.display = clickPiso.checked ? "block" : "none";
    }

function MostrarStandart() {
        let clickStandart = document.getElementById("clickStandart");

        let largo = document.getElementById("largo");      
        largo.style.display = clickStandart.checked ? "block" : "none";

        let ancho = document.getElementById("ancho");      
        ancho.style.display = clickStandart.checked ? "block" : "none";

        let alto = document.getElementById("alto");      
        alto.style.display = clickStandart.checked ? "block" : "none";

        let calc = document.getElementById("calc");      
        calc.style.display = clickStandart.checked ? "block" : "none";

        let botonCalcStandart = document.getElementById("botonCalcStandart");      
        botonCalcStandart.style.display = clickStandart.checked ? "block" : "none";
    }

function MostrarEspecial() {
        let clickEspecial = document.getElementById("clickEspecial");

        let largo = document.getElementById("largo");      
        largo.style.display = clickEspecial.checked ? "block" : "none";

        let ancho = document.getElementById("ancho");      
        ancho.style.display = clickEspecial.checked ? "block" : "none";

        let alto = document.getElementById("alto");      
        alto.style.display = clickEspecial.checked ? "block" : "none";

        let aletaSup = document.getElementById("aletaSup");      
        aletaSup.style.display = clickEspecial.checked ? "block" : "none";

        let aletaInf = document.getElementById("aletaInf");      
        aletaInf.style.display = clickEspecial.checked ? "block" : "none";

        let calc = document.getElementById("calc");      
        calc.style.display = clickEspecial.checked ? "block" : "none";

        let botonCalcStandart = document.getElementById("botonCalcStandart");      
        botonCalcEspecial.style.display = clickEspecial.checked ? "block" : "none";
    }



function calcPiso() {
        let largo = document.getElementsByName("largo")[0].value;
        let ancho = document.getElementsByName("ancho")[0].value;
        let calc = Number(largo) * Number(ancho) * 0.000001;
        document.getElementsByName("calc")[0].value = calc.toFixed(4);
        
    }

function standart(largo,ancho,alto) {
  if(ancho > largo) {
    return ("error!! El ancho supera el largo");
  }
  else {
    return ((65 + (2 * Number(largo) + 2 * Number(ancho))) * (Number(alto) + Number(ancho) + 16) * 0.000001).toFixed(4);
  }
}

function especial(largo,ancho,alto,aleta_sup,aleta_inf) {
  if( largo<0 || ancho<0 || alto<0 || aleta_sup<0 || aleta_inf<0 ||
  	  ancho > largo || aleta_inf > ancho || aleta_sup > ancho) {
    return ("error!! Los Datos son Incorrectos!!");
  }
  else {
    return ((65 + (2 * Number(largo) + 2 * Number(ancho))) * (Number(alto) + Number(ancho) + Number(aleta_sup) + Number(aleta_inf)) * 0.000001).toFixed(4);
  }
}

function calcStandart() {
        let largo = document.getElementsByName("largo")[0].value;
        let ancho = document.getElementsByName("ancho")[0].value;
        let alto = document.getElementsByName("alto")[0].value;
        let calc = standart(largo,ancho,alto);
        
        document.getElementsByName("calc")[0].value = calc;
        
    }

function calcEspecial() {
        let largo = document.getElementsByName("largo")[0].value;
        let ancho = document.getElementsByName("ancho")[0].value;
        let alto = document.getElementsByName("alto")[0].value;
        let aletaSup = document.getElementsByName("aletaSup")[0].value;
        let aletaInf = document.getElementsByName("aletaInf")[0].value;
        let calc = especial(largo,ancho,alto,aletaSup,aletaInf);
        
        document.getElementsByName("calc")[0].value = calc;
        
    }

///////////////////////////////////////////////////////////////////////////////////////
///Cotización Funciones/////////////

function MostrarPrecio() {
        let clickPrecio = document.getElementById("clickPrecio");

        let sup = document.getElementById("sup");      
        sup.style.display = clickPiso.checked ? "block" : "none";

        let precio = document.getElementById("precio");      
        precio.style.display = clickPiso.checked ? "block" : "none";

        let resultado = document.getElementById("resultado");      
        resultado.style.display = clickPiso.checked ? "block" : "none";

        let botonCalcPrecio = document.getElementById("botonCalcPrecio");      
        botonCalcPrecio.style.display = clickPiso.checked ? "block" : "none";
    }


function calcPrecio() {
        let sup = document.getElementsByName("sup")[0].value;
        let precio = document.getElementsByName("precio")[0].value;
        let resultado = Number(sup) * Number(precio);
        document.getElementsByName("resultado")[0].value = resultado.toFixed(2);
        
    }
