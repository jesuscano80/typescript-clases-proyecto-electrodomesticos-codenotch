"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Television = void 0;
var electro_1 = require("./electro");
var Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    function Television(resolucion, sintonizador, consumo, color) {
        if (consumo === void 0) { consumo = "F"; }
        if (color === void 0) { color = "blanco"; }
        var _this = _super.call(this, consumo, color) || this;
        _this.resolucion = 20;
        _this.sintonizador = false;
        _this.resolucion = resolucion;
        _this.sintonizador = sintonizador;
        return _this;
    }
    Television.prototype.getSintonizador = function () {
        return this.sintonizador;
    };
    Television.prototype.getResolucion = function () {
        return this.resolucion;
    };
    Television.prototype.setResolucion = function (resolucion) {
        this.resolucion = resolucion;
    };
    Television.prototype.setSintonizador = function (boolean) {
        this.sintonizador = boolean;
    };
    Television.prototype.preciofinal = function () {
        var añadir = 0;
        if (this.resolucion >= 40) {
            añadir += ((_super.prototype.preciofinal.call(this) * 30) / 100);
        }
        if (this.sintonizador == true) {
            añadir += 50;
        }
        return _super.prototype.preciofinal.call(this) + añadir;
    };
    return Television;
}(electro_1.Electro));
exports.Television = Television;
