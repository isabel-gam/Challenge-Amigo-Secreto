let listaNombresAmigos = []; // declaro la cadena

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === ""){
        alert ("Ingresa un nombre valido")
        document.querySelector("#amigo").value = ""; //posible nueva funcion
    }else {
        listaNombresAmigos.push(nombreAmigo);
        console.log(listaNombresAmigos);
        document.querySelector("#amigo").value = ""; //posible nueva funcion
        mostrarListaAmigos(nombreAmigo);
    }
    return;
}

function mostrarListaAmigos(nombreAmigo) {
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombreAmigo;
    lista.appendChild(li);
}