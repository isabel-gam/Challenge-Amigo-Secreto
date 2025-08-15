let listaNombresAmigos = []; // declaro la cadena

function agregarAmigo() {
    if (listaNombresAmigos==0)
    {
       document.getElementById("resultado").innerHTML = ""; 
    }
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === ""){
        alert ("Por favor, inserte un nombre")
        limpiarInput ();
    }else {
        if (listaNombresAmigos.includes(nombreAmigo)) { //Evitar duplicado
            alert("Ese nombre ya fue ingresado");
            limpiarInput ();
        } else {
            listaNombresAmigos.push(nombreAmigo);
            console.log(listaNombresAmigos);
            limpiarInput ();
            mostrarListaAmigos();
        }
    }
    return;
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpia antes de volver a mostrar

    for (let i = 0; i < listaNombresAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaNombresAmigos[i];
        lista.appendChild(li);
    }
}

function limpiarInput () {
    document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
    if (listaNombresAmigos.length === 0) {
    alert("No has ingresado aún ningun nombre");
    } else {
        let posicionLista = Math.floor(Math.random() *listaNombresAmigos.length);
        let nombreSeleccionado = listaNombresAmigos[posicionLista];
        console.log(nombreSeleccionado);
        mostrarResultado(nombreSeleccionado);
        reiniciar();
        return nombreSeleccionado;
    }
}

function mostrarResultado(nombre) {
    document.getElementById("resultado").innerHTML = `<li>Tu amigo secreto es: ${nombre}</li>`;
    return;
}

function reiniciar() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaNombresAmigos.length = 0;
    console.log(listaNombresAmigos);
}