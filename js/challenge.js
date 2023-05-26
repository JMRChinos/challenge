var botonEncriptar = document.querySelector(".enc");
var botonDesencriptar = document.querySelector(".des");
var muneco = document.querySelector(".cont-img");
var contenedor = document.querySelector(".cont-msg");
var resultado = document.querySelector(".txt-answer");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var txttext = recuperarTexto();
    resultado.textContent = encriptarTexto(txttext);

}

function desencriptar(){
    ocultarAdelante();
    var txttext = recuperarTexto();
    resultado.textContent = desencriptarTexto(txttext);
    
}

function recuperarTexto(){
    var txttext = document.querySelector(".txt-text");
    return txttext.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    cont-img.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }

    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;

        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;

        }
        else{
            textoFinal = textoFinal + texto[i]
        }

    }
    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".txt-answer").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
        
    })

