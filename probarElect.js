"use strict";
exports.__esModule = true;
var electro_1 = require("./electro");
var television_1 = require("./television");
var lavadora_1 = require("./lavadora");
var almacen = new Array(10);
var lavadora1 = new lavadora_1.Lavadora(20, "C", "amarillo");
var lavadora2 = new lavadora_1.Lavadora(50, "D", "azul");
var lavadora3 = new lavadora_1.Lavadora(20, "K", "negro");
var television1 = new television_1.Television(26, true);
var television2 = new television_1.Television(42, false);
var television3 = new television_1.Television(19, true);
var electro1 = new electro_1.Electro("B", "negro");
var electro2 = new electro_1.Electro("E", "gris");
var electro3 = new electro_1.Electro("B", "amarillo");
var electro4 = new electro_1.Electro("F", "gris");
almacen = [lavadora1, lavadora2, lavadora3, television1, television2, television3, electro1, electro2, electro3, electro4];
var lavadora = 0;
var television = 0;
var electro = 0;
for (var i = 0; i < 10; i++) {
    if (almacen[i] instanceof electro_1.Electro) {
        electro += almacen[i].preciofinal();
    }
    switch (almacen[i].constructor) {
        case lavadora_1.Lavadora:
            lavadora += almacen[i].preciofinal();
            break;
        case television_1.Television:
            television += almacen[i].preciofinal();
            break;
    }
}
console.log("Precio total -- \n Lavadoras: " + lavadora + "\n Televisores : " + television + "\n Electro : " + electro);
var array = [lavadora_1.Lavadora, television_1.Television, electro_1.Electro];
