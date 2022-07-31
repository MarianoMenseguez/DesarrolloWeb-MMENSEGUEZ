function obtenerProductosCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}
function renderProductosCarrito() {
  let productos = obtenerProductosCarrito();
  let contenido = `<p class="alert alert-danger text-center" role="alert">No se encontraron Productos en el carrito!</p>`;

  if (productos.length > 0) {
    contenido = `<p class="text-end"><a href="#" class="btn btn-danger text-white" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito</a></p>
         <table class="table">`;
let total= 0;

    for (let producto of productos) {
      
      let precio = producto.precio * producto.cantidad;

      contenido += `<tr>
         <td><img src=imagenes/${producto.imagen} alt="${producto.nombre}" width="64"></td>
         <td class="aling-middle">${producto.nombre} X ${producto.cantidad} </td>
         <td class="aling-middle"><b>$${precio}</b></td>
         <td class="text-end"><a href="#" class="btn btn-danger" onclick="eliminarCarrito(${producto.id})"></a><p/>
         </td></tr>`;
                    
         total += precio;
    }
debugger;
    contenido += `<tr>
        <td>&nbsp;</td>
        <td class="aling-middle">Total a pagar</td>
        <td class="aling-middle"><b>$${total}</b></td>
        <td class="text-end"><a href="#" class=" btn btn-danger">Finalizar compra</a></td>
        </tr>`;
        
    contenido += ` </table>`;
  }
  document.getElementById("productos_carrito").innerHTML = contenido;
}
obtenerProductosCarrito();
renderProductosCarrito();
