enum Color {blanco = "BLANCO",negro = "NEGRO",rojo = "ROJO",azul= "AZUL",gris="GRIS"};
enum Consumo {A="a",B="b",C="c",D="d",E="e",F="f"};

class Electro
{   

    public preciobase: number=100;
    public consumo: string;
    public color: string;
    public peso : number= 5;
    

    constructor(consumo:string="F", color:string="Blanco")
    {   this.consumo=consumo;
        this.color=color;
        this.comprobarConsumoEnergetico(this.consumo);
        this.comprobarColor(this.color);
        
    } 

private comprobarColor(param:string){
    
    if (((<any>Object).values(Color).includes(param.toUpperCase()))==false) {
        this.color= "blanco";
    }

}


private comprobarConsumoEnergetico(param:string){
    
    if (((<any>Object).values(Consumo).includes(param.toLowerCase()))==false) {
                this.consumo="F";
    }
}
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
   
    getColor():String{
        return this.color;
    }

    getPeso(): number{
        return this.peso;
    }

    getConsumo(): string{
        return this.consumo;
    }

    getPreciobase(): number{
        return this.preciobase;
    }

    setColor(color:string){
        this.color=color;
    }

    setPeso(peso:number){
        this.peso=peso;
    }

    setPreciobase(precio:number){
        this.preciobase=precio;
    }

    setConsumo(consumo:Consumo){
        this.consumo=consumo;
    }
    

    public preciofinal():number
    {
        let total:number=this.preciobase;
                switch (this.consumo.toUpperCase())
                {
                        case "A":
                            total+=100;
                        break;
                        case "B":
                            total+=80;
                        break;
                        case "C":
                            total+=60;
                        break;
                        case "D":
                            total+=50;
                        break;
                        case "E":
                            total+=30;
                        break;
                        case "F":
                            total+=10;
                        break;
                }

                if(this.peso>=80){
                    total+=100;
                }
                if(this.peso>=50 && this.peso<=79){
                    total+=80;
                }
                if(this.peso>=20 && this.peso<=49){
                    total+=50;
                }    
                if(this.peso>=0 && this.peso<=19){    
                    total+=10;
                }
          return total;      
    }

}

export {Electro, Color,Consumo};

let newElectro = new Electro ("A","Blanco");
let newElectro1 = new Electro ("B","Amarillo");
let newElectro2 = new Electro ("G","Azul");


console.log(newElectro)
console.log(newElectro1)
console.log(newElectro2)
console.log(newElectro.preciofinal())
console.log(newElectro1.preciofinal())
console.log(newElectro2.preciofinal())

