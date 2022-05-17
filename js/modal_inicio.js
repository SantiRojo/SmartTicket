let contenedorModalUsuario = document.getElementById("contenedorModalUsuario");

let inputUsuario = document.getElementById("inputNombreUsuario");

let mensajeBienvenida = document.getElementById("bienvenida");

let nombreUsuario = localStorage.getItem("nombreUsuario");

if(nombreUsuario != null){
    contenedorModalUsuario.remove()
    mensajeBienvenida.innerText = `¡Te damos la bienvenida, ${nombreUsuario}!`;
}

inputUsuario.addEventListener("change",() => {

    nombreUsuario = inputUsuario.value;
    
    if(nombreUsuario != ""){

        contenedorModalUsuario.remove();

        mensajeBienvenida.innerText = `¡Te damos la bienvenida, ${nombreUsuario}!`;

        localStorage.setItem("nombreUsuario", nombreUsuario);
    }
})


