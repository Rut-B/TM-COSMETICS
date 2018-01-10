import { Component, OnInit,ViewEncapsulation, Input } from '@angular/core';
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
  @Input() image: string;
  public productRef;
  public ELEMENT_DATA: Element_P[];
  public dataSource: MatTableDataSource < Element_P > ;
  constructor(private afs: AngularFirestore, public databaseFirebase: DatabaseFirebaseService){

    this.productRef = this.afs.collection("products");
    let res=this.productRef.valueChanges().subscribe(res=>{
      console.log(res);
      this.ELEMENT_DATA=res;
      var table_s=document.getElementById("table");
      table_s.style.display="block";
      let cont=document.getElementById("content");
     // while(cont.firstElementChild==null){
        //let cont=document.getElementById("content");
       // alert(this.ELEMENT_DATA);
     // for (let i=0;i<this.ELEMENT_DATA.length;i++){
     //   this.createTuple(0);
    //    this.show_pic("https://cdn.shopify.com/s/files/1/0600/2197/products/Menchie_grande.jpg?v=1508794752");
     // }
    //}
    //this.createTuple(0);
    });
    //while(this.ELEMENT_DATA==null);

  }

  public createTuple(iter:number){
    let table1=document.getElementById("content");
    alert(table1.firstElementChild);
    let rows=table1.firstElementChild;
    if(rows!=null){
    alert(rows);
    if(iter%2==1){
      //rows[iter].style.backgroundColor="white";
    }
  }
  }
  public show_pic(imgUrl): void{
    document.execCommand('insertimage', false, imgUrl);
  }
}
export interface Element_P {
  productName: string;
  price: string;
  quantity: string;
  pic:File;
}