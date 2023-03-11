import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

correo!: string;
password!: string;

  fomularioEnviado(){
    console.log(this.correo)
    console.log("El formulario fue enviado")
    alert("Enviado ")
  }

}
