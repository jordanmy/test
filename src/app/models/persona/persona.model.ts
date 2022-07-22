export class Persona{


    public usuario: string;
    public  nombres: string;
    public apellidos: string;
    public departamento: string;
    public cargo: string;
    public email: string;


    constructor(usuario: string,nombres:string, apellidos: string,departamento:string,cargo: string,email:string){
        this.usuario = usuario;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.departamento = departamento;
        this.cargo = cargo;
        this.email = email;
    }
}