export class Persona{
    private nombre: string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }
}