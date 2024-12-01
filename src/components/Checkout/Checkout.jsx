import "./Checkout.css"
function Checkout() {
  return (
    <div className="divForm">
      <form className="formCheck">
        <label>Nombre</label>
        <input type="text" />
        <label>Apellido</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Telefono</label>
        <input type="number" />

        <button type="submit">Generar Oden de Compra</button>      
      </form>
    </div>
  )
}

export default Checkout