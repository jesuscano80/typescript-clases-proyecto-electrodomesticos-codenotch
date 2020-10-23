import { Electro } from "./electro"
import {Television} from "./television"
import {Lavadora} from "./lavadora"
import {Consumo, Color} from "./electro"
var almacen= new Array (10);
var lavadora1= new Lavadora (20,"C","amarillo");
var lavadora2= new Lavadora (50,"D","azul");
var lavadora3= new Lavadora (20,"K","negro");
var television1= new Television (26,true);
var television2= new Television (42,false);
var television3= new Television (19,true);
var electro1 = new Electro ("B","negro");
var electro2 = new Electro ("E","gris" );
var electro3 = new Electro ("B","amarillo");
var electro4 = new Electro ("F", "gris");
almacen = [lavadora1,lavadora2,lavadora3, television1,television2,television3,electro1,electro2,electro3,electro4];

let lavadora:number=0;
let television:number=0;
let electro:number=0;

for (let i=0;i<10;i++){
     if(almacen[i] instanceof Electro)
     {
         electro+=almacen[i].preciofinal();
     }

    switch(almacen[i].constructor)
    {
        case Lavadora : 
        lavadora+=almacen[i].preciofinal();
        break;
    
        case Television:
        television+=almacen[i].preciofinal();
        break;
    }   

}
console.log("Precio total -- \n Lavadoras: " + lavadora +"\n Televisores : "+ television + "\n Electro : "+ electro);

let array=[Lavadora,Television,Electro];



