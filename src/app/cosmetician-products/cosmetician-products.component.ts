import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-cosmetician-products',
  templateUrl: './cosmetician-products.component.html',
  styleUrls: ['./cosmetician-products.component.scss']
})
export class CosmeticianProductsComponent implements OnInit {
  public specificName:string;
  public productName:string;
  public code:number;
  public marketer:string;
  public price:number;

  public prodRef;
  
  
  
  constructor(private afs: AngularFirestore) {   

    this.prodRef = this.afs.collection("products");

}

addProducts(name,specificName,code,marketer,price){

 // var prodRef = this.afs.collection("products");
  
    this.prodRef.doc(this.productName).set({
     name: this.specificName,
     code: this.code, 
     marketer: this.marketer, 
     price:this.price
   });

}

  ngOnInit() {
  }

}
