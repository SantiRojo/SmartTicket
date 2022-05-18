let botonCarrito = document.getElementById("botonCarrito");
let buscador = document.getElementById("buscador");
let contenedorCardsEventos = document.getElementById("contenedorCardsEventos");
let card = document.getElementsByClassName("card");
let botonComprar = document.getElementsByClassName("botonComprar");

const eventos = [];

const carrito = [];

function agregarCardAHTML(evento) {

    let card = document.createElement("div");
    card.setAttribute("class","cards");

    contenedorCardsEventos.appendChild(card);

    let imagen = document.createElement("img");
    imagen.setAttribute("src",evento.img);
    imagen.setAttribute("alt",evento.artista);

    card.appendChild(imagen);

    let tituloCard = document.createElement("h3");
    tituloCard.setAttribute("class","tituloCard")
    tituloCard.innerText = evento.artista;
    
    card.appendChild(tituloCard);

    let botonesCard = document.createElement("div");
    botonesCard.setAttribute("class","botonesCards");

    card.appendChild(botonesCard);

    let precio = document.createElement("p");
    precio.setAttribute("class", "precio")
    precio.innerHTML = "$" + evento.precio;

    botonesCard.appendChild(precio);

    let botonComprar = document.createElement("button");
    botonComprar.setAttribute("class","botonComprar");
    botonComprar.innerText = "Comprar";
    botonesCard.appendChild(botonComprar);

};

function mostrarMensajeSinResultados(){

    let mensajeError = document.createElement("p");
    mensajeError.setAttribute("id","errorBusqueda");
    mensajeError.innerText = "No encontramos el evento que buscas :("

    contenedorCardsEventos.appendChild(mensajeError);

};

function buscar(){

    let busqueda = buscador.value.toLowerCase();

    let comparacion;

    contenedorCardsEventos.innerHTML = "";


    for(let show of eventos){
        
        comparacion = show.artista.toLowerCase();

        if(comparacion.includes(busqueda)){
            
            agregarCardAHTML(show);
            
        };

    };

    if(contenedorCardsEventos.innerHTML == ""){

        mostrarMensajeSinResultados();

    };



};



class Evento {

    constructor (artista, precio, stock, img, id){
        this.artista = artista;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.id = id;
    };

};

class Carrito {

    constructor (compra, cantidad, precio){
        this.compra = compra;
        this.cantidad = cantidad;
        this.precio = precio;
    };

    calcularTotal(){
        this.precioFinal = (this.precio + 150) * this.cantidad;
    };

    vender(){
        eventos[indice].stock - this.cantidad;
    };

};

let evento1 = new Evento("Boris Brejcha", 7200, 70, "./media/img/boris_brejcha.png",1);
let evento2 = new Evento("Solomun", 5300, 30,"./media/img/solomun.jpeg", 2);
let evento3 = new Evento("Green Velvet", 6700, 50, "./media/img/green_velvet.jpeg",3);

eventos.push(evento1 , evento2 , evento3);

eventos.forEach(evento => agregarCardAHTML(evento));

buscador.addEventListener("input",buscar);







