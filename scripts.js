document.getElementById("aside_after").style.display = "none";


function encriptar(){

  
    var entradaCruda = document.getElementById("cajaEntradaUsuario").value;
    var userInput = entradaCruda.toLowerCase()
    

    var encripted = "";

    for(x in userInput){
        switch(userInput[x]){
            case 'a':
                encripted += "ai";
                break;
            case 'e':
                encripted += "enter";
                break;
            case 'i':
                encripted += "imes";
                break;
            case 'o':
                encripted += "ober";
                break;
            case 'u':
                encripted += "ufat";
                break;
            default:
                encripted += userInput[x];
                break;
        }
    }
    return encripted;
}


function desencriptar(phrase){

    var filtrandoA = phrase.replace(/ai/g , "a");
    var filtrandoE = filtrandoA.replace(/enter/g, "e");
    var filtrandoI = filtrandoE.replace(/imes/g, "i");
    var filtrandoO = filtrandoI.replace(/ober/g, "o");
    var filtrandoU = filtrandoO.replace(/ufat/g, "u");
    return filtrandoU;
}

function verificando_Limpieza(){

    var contenidoText = document.getElementById("cajaEntradaUsuario").value ;
    if (contenidoText.length == 0){
        document.getElementById("aside_before").style.display = "block";
        document.getElementById("aside_after").style.display = "none";
    }
}



setInterval(verificando_Limpieza,500);



var botonEncriptar = document.getElementsByClassName("botonOscuro")[0];

botonEncriptar.addEventListener("click",function(){

   
    let contenidoText = document.getElementById("cajaEntradaUsuario").value ;

    if (contenidoText.length == 0){
        console.log("nada pasa");
    }else{

        
        var codigoEncriptado = encriptar();
        document.getElementById("textarea_salida").innerHTML = codigoEncriptado;    

       
        document.getElementById("aside_before").style.display = "none";
        document.getElementById("aside_after").style.display = "block";
    }

    
});



var botonDesencriptar = document.getElementsByClassName("botonClaro")[0];

botonDesencriptar.addEventListener("click",function(){

    var entradaUsuario =document.getElementById("cajaEntradaUsuario").value;
    document.getElementById("textarea_salida").innerHTML = entradaUsuario;
    
})


//BOTON PARA COPIAR
var botonCopiar = document.getElementsByClassName("botonCopiar")[0];

botonCopiar.addEventListener("click", function(){

    var contenidoCaja = document.getElementById("textarea_salida");
    
    contenidoCaja.select();
    contenidoCaja.setSelectionRange(0,99999);
    document.execCommand("copy");

})

