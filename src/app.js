//crear clase
class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  //agregar setters y getters
  get nombre() {
    return this._nombre;
  }
  set nombre(nombreNuevo) {
    this._nombre = nombreNuevo;
  }

  get impuesto() {
    return this._impuesto;
  }
  set impuesto(ImpuestoNuevo) {
    this._impuesto = ImpuestoNuevo;
  }
  calcularImpuesto() {
    return (
      (this._impuesto._monto_bruto_anual - this._impuesto._deducciones) * 0.21
    );
  }
}
//crear clase
class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }
  //agregar setters y getters
  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }
  set monto_bruto_anual(nuevo_monto_bruto) {
    this._monto_bruto_anual = nuevo_monto_bruto;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevas_deducciones) {
    this._deducciones = nuevas_deducciones;
  }
}
///////////////
//crear instancias
const impuestoPrimerCliente = new Impuestos(300, 50);
const PrimerCliente = new Cliente("Angelina Jolie", impuestoPrimerCliente);

calculoPrimerCliente = PrimerCliente.calcularImpuesto();

console.log(calculoPrimerCliente);
