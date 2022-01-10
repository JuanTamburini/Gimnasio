import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: any[] = new Array<any>()

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {

    this.clientes.length = 0;
    this.db.collection('clientes').get().subscribe((resultado)=>{
    
      resultado.docs.forEach((item)=>{
        let cliente: any = item.data();
        cliente.id = item.id;
        cliente.ref = item.ref
        this.clientes.push(cliente)
      })

    })

  
  }

}
