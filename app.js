let listaNombresAmigos = []; // declaro la cadena

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === ""){
        alert ("Ingresa un nombre valido")
        limpiarInput ();
    }else {
        if (listaNombresAmigos.includes(nombreAmigo)) { //Evitar duplicado
            alert("Ese nombre ya fue ingresado");
            limpiarInput ();
        } else {
            listaNombresAmigos.push(nombreAmigo);
            console.log(listaNombresAmigos);
            limpiarInput ();
            mostrarListaAmigos(nombreAmigo);
        }
    }
    return;
}

function mostrarListaAmigos(nombreAmigo) {
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombreAmigo;
    lista.appendChild(li);
}

function limpiarInput () {
    document.querySelector("#amigo").value = "";
}