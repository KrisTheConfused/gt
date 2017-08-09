imported.src = "w3.js";

function writeSpitzenvolumenstrom() {

    var _LUsumme = document.getElementById("LUsumme").value;
    var _LUgroesster = document.getElementById("LUgroesster").value;

    var Ergebnis = getSpitzenvolumenstrom(_LUsumme, _LUgroesster);
    
    if(Ergebnis){
        Ergebnis = Math.round(Ergebnis*100)/100;
        document.getElementById("ergebnis").innerHTML = Ergebnis;
    }else{
        document.getElementById("ergebnis").innerHTML = "FEHLER";
    }
}


                


