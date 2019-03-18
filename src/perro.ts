import { Mascota } from "./mascota";
import { Persona } from "./persona";

export class Perro implements Mascota{
    nombre: string;
    dueño: Persona;

    constructor(nombre:string, dueño: Persona){
        this.nombre = nombre;
        this.dueño = dueño;
    }

    saludar():string{

        return "guau";
    }
}