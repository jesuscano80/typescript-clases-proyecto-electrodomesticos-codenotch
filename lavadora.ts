import {Electro, Consumo, Color} from "./electro"

class Lavadora extends Electro{
    carga: number=5;

    constructor(carga:number,consumo:string="F", color:string="blanco"){
        super(consumo,color);
        this.carga=carga;
    }

    getCarga():number{
        return this.carga; 
    }
    setCarga(carga:number){
        this.carga=carga;
    }
    preciofinal():number{
      let añadir: number=0;
        if(this.carga>30)
        {
        añadir=50
        } 
     return super.preciofinal() + añadir;    
    }
}

export {Lavadora};