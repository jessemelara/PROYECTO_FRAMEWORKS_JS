import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formText = "Formulario";
  public user: any;

  constructor() {
    this.user = {
      nombre: "",
      apellido: "",
      bio: "",
      genero: ""
    }
  }

  ngOnInit(): void {
  }

  onSubmit(userForm:any){
    if(userForm.form.valid){
      alert("Formulario enviado");
      console.log(this.user);
    }else{
      userForm.form.markAllAsTouched();
    }
  }
}
