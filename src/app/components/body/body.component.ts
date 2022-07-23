import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona/persona.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent{
  persona : Persona [] = [
    new Persona ("Usuario 1","Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com"),
    new Persona ("Usuario 2","Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com"),
    new Persona ("Usuario 3","Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com"),
    new Persona ("Usuario 4","Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com")
  ] ;

  addrow()
  {
    let longitud : number = 0;
    longitud = this.persona.length + 1;
    this.persona.push(new Persona ("Usuario " + longitud,"Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com"));
  }

  deleteRow(usuario: any){
    for(let i = 0; i < this.persona.length; ++i){
        if (this.persona[i].usuario === usuario) {
            this.persona.splice(i,1);
        }
    }
    
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
