import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import {DatabaseFirebaseService} from '../database-firebase.service'
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  encapsulation: ViewEncapsulation.None
})






export class StoreComponent {
  public productRef;
  public ELEMENT_DATA: Element_P[];
  public dataSource: MatTableDataSource < Element_P > ;
  constructor(private afs: AngularFirestore, public databaseFirebase: DatabaseFirebaseService){

    this.productRef = this.afs.collection("products");
    let res=this.productRef.valueChanges().subscribe(res=>{
      console.log(res);
      this.ELEMENT_DATA=res;
      var table_curr=document.getElementById("content");
      table_curr.innerHTML='';
      for (let i=0;i<this.ELEMENT_DATA.length;i++){
        this.createTuple(i);
      }
    });
  }
  public createTuple(iter:number){
    let table1=document.getElementById("content");
    let tuple=document.createElement('div');
    tuple.className= "tuple";
    var name=document.createElement('div');
    name.className= "productName";
    name.innerText=this.ELEMENT_DATA[iter].productName;
    tuple.id=iter.toString();
    var price=document.createElement('div');
    price.className= "price";
    price.innerText=this.ELEMENT_DATA[iter].price+" NIS";
    var quantity=document.createElement('div');
    quantity.className= "quantity";
    quantity.innerText=this.ELEMENT_DATA[iter].quantity.toString();
    var pic=document.createElement('div');
    pic.className= "pic";
   // pic.innerText=this.ELEMENT_DATA[iter];
    tuple.appendChild(name);
    tuple.appendChild(price);
    tuple.appendChild(quantity);
    tuple.appendChild(pic);
    if(iter%2==1){
      tuple.style.backgroundColor="white";
    }
    table1.appendChild(tuple);
  }
}
export interface Element_P {
  productName: string;
  price: string;
  quantity: string;
  pic:File;
}