import { Mascota } from "./mascota";
import { Persona } from "./persona";

export class Pajaro implements Mascota{
    nombre: string;
    dueño: Persona;
    cantor: boolean;

    constructor(nombre:string, dueño: Persona){
        this.nombre = nombre;
        this.dueño = dueño;
    }


    saludar():string{
        if(this.cantor){ 
            return "daros conchudoooo"
        }
        else{
            return "pio";
        }
    }
}