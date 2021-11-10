const txtIdCuenta= document.getElementById("id_cuenta");
const txtNombre= document.getElementById("nombre");
const optTipoCliente= document.getElementById("tipo_cliente");
const txtBalance= document.getElementById("balance");
const btnGuardar= document.getElementById("btn_guardar");

const tablaClientes = document.querySelector("#tabla_clientes tbody");

btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();
    const cliente ={
        id_cuenta: txtIdCuenta.value,
        nombre: txtNombre.value.toUpperCase(),
        tipocliente: optTipoCliente.value.toUpperCase(),
        balance:Number(txtBalance.value)
    }
    insertarCliente(cliente);
});

function insertarCliente(cliente) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
             <img src="img/${cliente.id_cuenta}.png"
             alt="" width="100" height="100">
        </td>
        <td>${cliente.id_cuenta}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.tipocliente}</td>
        <td>${cliente.balance}</td>
    `;
    tablaClientes.appendChild(row);
}