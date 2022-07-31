  function renderProductos() {
    let productos = obtenerProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-4">
    <div class="card border-0 fondo">
    <img src=imagenes/${producto.imagen} class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
    <h5 class="card-title text-center">${producto.id}</h5>
    <p class="card-tex text-center" >${producto.nombre}</p>
    <p class="card-tex text-center">$${producto.precio}</p>
    <p class="card-tex text-center">${producto.codigo}</p>
    <p class="card-text text-center"><a href="#" class="btn btn-danger"title="Agregar al carrito" onclick="agregarCarrito(${producto.id})">Agregar</a><p/>
    </div>
    </div>
    </div>`;
      }
      document.getElementById("productos").innerHTML = contenido;
    }
 guardarProductosLS(productos);
 actualizarBotonCarrito();
 renderProductos();