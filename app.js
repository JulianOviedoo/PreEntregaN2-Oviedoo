function calcularValorFinal() {
    var productos = [
      { nombre: "Carpeta", precio: 400.00 },
      { nombre: "Cartuchera", precio: 550.00 },
      { nombre: "Crayones", precio: 230.00 },
  
    ];
  
    function calcularValorFinalProducto(precioProducto, cantidad) {
      const impuesto = 0.18;
      var descuento = 0;
  
      if (precioProducto > 100) {
        descuento = 0.1;
      }
  
      var valorImpuesto = (precioProducto * cantidad) * impuesto;
      var valorDescuento = (precioProducto * cantidad) * descuento;
      var valorFinal = (precioProducto * cantidad) + valorImpuesto - valorDescuento;
  
      return valorFinal;
    }
  
    var agregarProducto = true;
    var totalCompra = 0;
  
    function obtenerListaProductos() {
      var lista = "";
      for (var i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + " - Precio: $" + productos[i].precio.toFixed(2) + "\n";
      }
      return lista;
    }
  
    while (agregarProducto) {
      var seleccionProducto = prompt("Ingrese el número del producto que desea comprar:\n" + obtenerListaProductos());
  
      var productoElegido = productos[parseInt(seleccionProducto) - 1];
  
      var cantidadProducto = parseInt(prompt("Ingrese la cantidad de '" + productoElegido.nombre + "' que desea comprar:"));
  
      var valorFinalProducto = calcularValorFinalProducto(productoElegido.precio, cantidadProducto);
      totalCompra += valorFinalProducto;
  
      console.log("Producto: " + productoElegido.nombre);
      console.log("Cantidad: " + cantidadProducto);
      console.log("Valor final del producto: $" + valorFinalProducto.toFixed(2));
      console.log("-----------------------------");
  
      var respuesta = prompt("¿Desea agregar otro producto? (s/n)");
      agregarProducto = (respuesta.toLowerCase() === "s");
    }
  
    alert("Valor total de la compra: $" + totalCompra.toFixed(2));
  }
  
  calcularValorFinal();
  