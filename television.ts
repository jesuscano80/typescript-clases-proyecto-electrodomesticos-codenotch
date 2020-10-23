import { Electro, Consumo, Color } from "./electro";

class Television extends Electro {

    public resolucion:number =20;
    public sintonizador:boolean = false;

    constructor ( resolucion:number, sintonizador:boolean,consumo:string="F", color:string="blanco"){
        super(consumo,color);
        this.resolucion= resolucion;
        this.sintonizador= sintonizador;
    }

    getSintonizador():boolean{
        return this.sintonizador;
    }

    getResolucion():number{
        return this.resolucion;
    }
    setResolucion(resolucion:number){
        this.resolucion=resolucion;
    }

    setSintonizador(boolean:boolean){
        this.sintonizador=boolean;
    }

    preciofinal():number{
        var añadir:number=0;
        if(this.resolucion>=40)
        {
            añadir+= ((super.preciofinal()*30)/100); 
        }
        if(this.sintonizador==true)
        {
            añadir+=50
        }
        return super.preciofinal()+añadir
    }

    
}
export{Television}