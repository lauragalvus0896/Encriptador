
const btnEncriptar = document.querySelector(".botonEncriptar");
const textEncriptar = document.querySelector(".texto");
const aviso = document.querySelector(".termino");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".mensaje-encriptado");
let muñeco = document.getElementById("muneco");
const btnCopiar = document.querySelector(".boton-copiar");
const btnDesencriptar = document.querySelector(".botonDesencriptar");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto ==""){
        alert("Ningún mensaje se ha encontrado");
    }else if(texto !== txt){
        alert("No debe tener acentos ni caracteres especiales");
    }else if(texto !== texto.toLowerCase()){
        alert("El texto debe ser en minúsculas");
    }else{
        texto = texto.replace(/e/gi, "enter");
        texto = texto.replace(/i/gi, "imes");
        texto = texto.replace(/a/gi, "ai");
        texto = texto.replace(/o/gi, "ober");
        texto = texto.replace(/u/gi, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        muñeco.remove();
    }


});


btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto ==""){
        alert("Ningún mensaje se ha encontrado");
    }else if(texto !== txt){
        alert("No debe tener acentos ni caracteres especiales");
    }else if(texto !== texto.toLowerCase()){
        alert("El texto debe ser en minúsculas");
    }else{
        texto = texto.replace(/enter/gi, "e");
        texto = texto.replace(/imes/gi, "i");
        texto = texto.replace(/ai/gi, "a");
        texto = texto.replace(/ober/gi, "o");
        texto = texto.replace(/ufat/gi, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        muñeco.remove();
    }


});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});