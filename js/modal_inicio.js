let contenedorModalUsuario = document.getElementById("contenedorModalUsuario");

let inputUsuario = document.getElementById("inputNombreUsuario");

let mensajeBienvenida = document.getElementById("bienvenida");

let nombreUsuario = localStorage.getItem("nombreUsuario");

if(nombreUsuario != null){
    contenedorModalUsuario.remove()
    mensajeBienvenida.innerText = `¡Te damos la bienvenida, ${nombreUsuario}!`;

    Swal.fire({
        
        title: `Eres ${nombreUsuario}?`,
        color: "#205375",
        icon: "question",
        iconColor: "#205375",
        background: "#FFD93D",
        allowOutsideClick: false,
        showConfirmButton: true,
        confirmButtonText: "Si, soy yo.",
        confirmButtonColor: "#36AE7C",
        showDenyButton: true,
        denyButtonText: "No 🤔",
        denyButtonColor: "#EB5353"
    }).then((result) => {

        if(result.isDenied){

            localStorage.clear();
            window.location.reload();
        };

    });

};

inputUsuario.addEventListener("change",() => {

    nombreUsuario = inputUsuario.value;
    
    if(nombreUsuario != ""){

        contenedorModalUsuario.remove();

        mensajeBienvenida.innerText = `¡Te damos la bienvenida, ${nombreUsuario}!`;

        localStorage.setItem("nombreUsuario", nombreUsuario);
    }
})


