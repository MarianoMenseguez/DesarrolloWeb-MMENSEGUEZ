const productos = [
    {
      id: 1,
      imagen: "musculosanegra.jpg",
      nombre: "Musculosa Negra",
      precio: 2000,
      codigo: "Cod. 101",
    },
    {
      id: 2,
      imagen: "musculosaroja.jpg",
      nombre: "Musculosa Roja",
      precio: 2000,
      codigo: "Cod. 102",
    },
    {
      id: 3,
      imagen: "short.jpg",
      nombre: "Short negro",
      precio: 2000,
      codigo: "Cod. 103",
    },
  ];

  function obtenerProductosLS() {
    return JSON.parse(localStorage.getItem("Productos")) || [];
  }
  function guardarProductosLS(productos) {
    localStorage.setItem("Productos", JSON.stringify(productos));
  }

  function buscarProducto(id) {
    let productos = obtenerProductosLS();
    return productos.find(x => x.id == id);
  }

  guardarProductosLS(productos);