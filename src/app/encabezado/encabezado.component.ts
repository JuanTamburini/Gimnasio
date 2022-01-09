import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  user: any;
  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user)=>{
      this.user = user
    })
  }

  logout() {
    this.auth.signOut();
  }
}
