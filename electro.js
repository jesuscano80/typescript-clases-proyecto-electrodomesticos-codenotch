"use strict";
exports.__esModule = true;
exports.Consumo = exports.Color = exports.Electro = void 0;
var Color;
(function (Color) {
    Color["blanco"] = "BLANCO";
    Color["negro"] = "NEGRO";
    Color["rojo"] = "ROJO";
    Color["azul"] = "AZUL";
    Color["gris"] = "GRIS";
})(Color || (Color = {}));
exports.Color = Color;
;
var Consumo;
(function (Consumo) {
    Consumo["A"] = "a";
    Consumo["B"] = "b";
    Consumo["C"] = "c";
    Consumo["D"] = "d";
    Consumo["E"] = "e";
    Consumo["F"] = "f";
})(Consumo || (Consumo = {}));
exports.Consumo = Consumo;
;
var Electro = /** @class */ (function () {
    function Electro(consumo, color) {
        if (consumo === void 0) { consumo = "F"; }
        if (color === void 0) { color = "Blanco"; }
        this.preciobase = 100;
        this.peso = 5;
        this.consumo = consumo;
        this.color = color;
        this.comprobarConsumoEnergetico(this.consumo);
        this.comprobarColor(this.color);
    }
    Electro.prototype.comprobarColor = function (param) {
        if ((Object.values(Color).includes(param.toUpperCase())) == false) {
            this.color = "blanco";
        }
    };
    Electro.prototype.comprobarConsumoEnergetico = function (param) {
        if ((Object.values(Consumo).includes(param.toLowerCase())) == false) {
            this.consumo = "F";
        }
    };
    // ESTAS ESTAN HECHAS CON REGEX SIN PEDIR PARAMETROS    
    // private comprobarConsumoEnergetico()
    //     {
    //         let patron=/[a-f]/i;
    //             if(patron.test(this.consumo)==false)
    //             {
    //               this.consumo="F"; 
    //              }     
    //     }
    // private comprobarColor()
    // {
    //     let patron= /blanco|negro|rojo|azul|gris/i;
    //         if(patron.test(this.color)==false)
    //             {
    //                 this.color="blanco";
    //             }
    // }
    Electro.prototype.getColor = function () {
        return this.color;
    };
    Electro.prototype.getPeso = function () {
        return this.peso;
    };
    Electro.prototype.getConsumo = function () {
        return this.consumo;
    };
    Electro.prototype.getPreciobase = function () {
        return this.preciobase;
    };
    Electro.prototype.setColor = function (color) {
        this.color = color;
    };
    Electro.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    Electro.prototype.setPreciobase = function (precio) {
        this.preciobase = precio;
    };
    Electro.prototype.setConsumo = function (consumo) {
        this.consumo = consumo;
    };
    Electro.prototype.preciofinal = function () {
        var total = this.preciobase;
        switch (this.consumo.toUpperCase()) {
            case "A":
                total += 100;
                break;
            case "B":
                total += 80;
                break;
            case "C":
                total += 60;
                break;
            case "D":
                total += 50;
                break;
            case "E":
                total += 30;
                break;
            case "F":
                total += 10;
                break;
        }
        if (this.peso >= 80) {
            total += 100;
        }
        if (this.peso >= 50 && this.peso <= 79) {
            total += 80;
        }
        if (this.peso >= 20 && this.peso <= 49) {
            total += 50;
        }
        if (this.peso >= 0 && this.peso <= 19) {
            total += 10;
        }
        return total;
    };
    return Electro;
}());
exports.Electro = Electro;
var newElectro = new Electro("A", "Blanco");
var newElectro1 = new Electro("B", "Amarillo");
var newElectro2 = new Electro("G", "Azul");
console.log(newElectro);
console.log(newElectro1);
console.log(newElectro2);
console.log(newElectro.preciofinal());
console.log(newElectro1.preciofinal());
console.log(newElectro2.preciofinal());
