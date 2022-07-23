import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Persona } from 'src/app/models/persona/persona.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, AfterViewInit{
 
  @ViewChild('mymodal') mymodal: ElementRef | undefined;
  closeResult = '';
  public persona : Persona [] = [
    new Persona ("Usuario 1","Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com"),
    new Persona ("Usuario 2","Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com"),
    new Persona ("Usuario 3","Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com"),
    new Persona ("Usuario 4","Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com")
  ] ;

  form: FormGroup;

  constructor(private modalService: NgbModal) {}
  

  ngAfterViewInit(): void {
    //this.open(this.mymodal);
  }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    /** field1, textArea1, textArea2 are form control instances */

    this.form = new FormGroup({
        usuario: new FormControl(''),
        nombres: new FormControl(''),
        apellidos: new FormControl(''),
        departamento: new FormControl(''),
        cargo: new FormControl(''),
        email: new FormControl(''),
    });
 }




  
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

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(): void {
    var obj = this.form.value;
    this.persona.push(new Persona ( obj.usuario, obj.nombres, obj.apellidos, obj.departamento, obj.cargo, obj.email));
    //this.persona.push(new Persona ("Usuario " + longitud,"Jordan","Yanez","Tecnologia","Desarrollador","jordanyanez1995@gmail.com"));
    this.mymodal
  }
  
}
