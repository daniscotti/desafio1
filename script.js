function codifica () {
    var textoCodificado = "";
    var texto = document.getElementById("mensagem").value;
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a")  {
            textoCodificado = textoCodificado + "ai";
        } else if (texto[i] == "e")  {
            textoCodificado = textoCodificado + "enter";
        } else if (texto[i] == "i")  {
            textoCodificado = textoCodificado + "imes";
        } else if (texto[i] == "o")  {
            textoCodificado = textoCodificado + "ober";
        } else if (texto[i] == "u")  {
            textoCodificado = textoCodificado + "ufat";
        } else {
            textoCodificado = textoCodificado + texto[i];
        }            
    }
    //alert(textoCodificado);
    document.querySelector(".bloco_criptografado").style.display = "none";
    document.querySelector(".bloco_criptografado_texto").style.display = "inline-block";
    document.querySelector(".texto_codificado").innerText = textoCodificado;
}

function decodifica () {
    var textoCodificado = "";
    var texto = document.getElementById("mensagem").value;
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a" & texto[i+1] == "i")  {
            textoCodificado = textoCodificado + "a";
            i++
        } else if (texto[i] == "e" & texto[i+1] == "n" & texto[i+2] == "t" & texto[i+3] == "e" & texto[i+4] == "r")  {
            textoCodificado = textoCodificado + "e";
            i=i+4
        } else if (texto[i] == "i" & texto[i+1] == "m" & texto[i+2] == "e" & texto[i+3] == "s")  {
            textoCodificado = textoCodificado + "i";
            i=i+3
        } else if (texto[i] == "o" & texto[i+1] == "b" & texto[i+2] == "e" & texto[i+3] == "r")  {
            textoCodificado = textoCodificado + "o";
            i=i+3
        } else if (texto[i] == "u" & texto[i+1] == "f" & texto[i+2] == "a" & texto[i+3] == "t")  {
            textoCodificado = textoCodificado + "u";
            i=i+3
        } else {
            textoCodificado = textoCodificado + texto[i];
        }            
    }
    document.querySelector(".bloco_criptografado").style.display = "none";
    document.querySelector(".bloco_criptografado_texto").style.display = "inline-block";
    document.querySelector(".texto_codificado").innerText = textoCodificado;
}

function copia() {
    let textoCopiado = document.querySelector(".texto_codificado");
    textoCopiado.select();
    document.execCommand("copy");
  }