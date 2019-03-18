import {Persona} from './persona'

export interface Mascota{
    nombre: string;
    dueño: Persona;

    saludar():string      
}

