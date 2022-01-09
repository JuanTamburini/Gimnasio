import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formularioDeLogin: FormGroup;
  datosIngresados: boolean = true;
  textoError: string = '';

  constructor(public creadorDeFormulario: FormBuilder, private auth: AngularFireAuth, private spinner: NgxSpinnerService) {
    this.formularioDeLogin = this.creadorDeFormulario.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      contraseña: ['', Validators.required]
    })
   }

  ngOnInit(): void {
}

  ingresar(){
    
    if(this.formularioDeLogin.valid){
      this.spinner.show();

        this.auth.signInWithEmailAndPassword(this.formularioDeLogin.value.email, this.formularioDeLogin.value.contraseña)
        .then((usuario)=>{ 
          this.spinner.hide();
          console.log(usuario);
        }).catch((error)=> {
          this.spinner.hide();
          console.log(error)
          this.datosIngresados = false;
          this.textoError = error.message;
      })
      
    }
    else {
      this.datosIngresados = false
    }
  }

}
