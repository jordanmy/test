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

  public delete(position: number)
  {
    this.persona.splice(position,1)
  }
}
