function agregarAlCarrito() {
    const precio = 13.99;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const total = precio * cantidad;
    document.getElementById('total').innerHTML = `Total: s/${total.toFixed(2)}`;
}

function realizarCompra() {
    alert('Compra realizada. ¡Gracias por tu compra!');
}
