import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FitGym';
  user: any;

  constructor(public auth: AngularFireAuth) {
    this.auth.user.subscribe((usuario)=> {
      console.log(usuario)
    })
  }
  login() {
    this.auth.signInWithEmailAndPassword("juan@gmail.com", "123456");
  }
  logout() {
    this.auth.signOut();
  }
}
