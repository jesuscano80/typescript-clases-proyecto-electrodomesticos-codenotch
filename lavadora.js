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
exports.Lavadora = void 0;
var electro_1 = require("./electro");
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(carga, consumo, color) {
        if (consumo === void 0) { consumo = "F"; }
        if (color === void 0) { color = "blanco"; }
        var _this = _super.call(this, consumo, color) || this;
        _this.carga = 5;
        _this.carga = carga;
        return _this;
    }
    Lavadora.prototype.getCarga = function () {
        return this.carga;
    };
    Lavadora.prototype.setCarga = function (carga) {
        this.carga = carga;
    };
    Lavadora.prototype.preciofinal = function () {
        var añadir = 0;
        if (this.carga > 30) {
            añadir = 50;
        }
        return _super.prototype.preciofinal.call(this) + añadir;
    };
    return Lavadora;
}(electro_1.Electro));
exports.Lavadora = Lavadora;
