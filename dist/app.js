"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Cliente = /*#__PURE__*/ (function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [
    {
      key: "nombre",
      get: function get() {
        return this._nombre;
      },
      set: function set(nombreNuevo) {
        this._nombre = nombreNuevo;
      },
    },
    {
      key: "impuesto",
      get: function get() {
        return this._impuesto;
      },
      set: function set(ImpuestoNuevo) {
        this._impuesto = ImpuestoNuevo;
      },
    },
    {
      key: "calcularImpuesto",
      value: function calcularImpuesto() {
        return (
          (this._impuesto._monto_bruto_anual - this._impuesto._deducciones) *
          0.21
        );
      },
    },
  ]);

  return Cliente;
})();

var Impuestos = /*#__PURE__*/ (function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  _createClass(Impuestos, [
    {
      key: "monto_bruto_anual",
      get: function get() {
        return this._monto_bruto_anual;
      },
      set: function set(nuevo_monto_bruto) {
        this._monto_bruto_anual = nuevo_monto_bruto;
      },
    },
    {
      key: "deducciones",
      get: function get() {
        return this._deducciones;
      },
      set: function set(nuevas_deducciones) {
        this._deducciones = nuevas_deducciones;
      },
    },
  ]);

  return Impuestos;
})(); ///////////////
//crear instancias

var impuestoPrimerCliente = new Impuestos(300, 50);
var PrimerCliente = new Cliente("Angelina Jolie", impuestoPrimerCliente);
calculoPrimerCliente = PrimerCliente.calcularImpuesto();
console.log(calculoPrimerCliente);
