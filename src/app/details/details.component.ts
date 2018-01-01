
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatTableModule} from '@angular/material';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { _document } from '@angular/platform-browser/src/browser';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent {
  public treatmentRef;
  public code;
  public price;
  public description;
  public duration;
  public treatment;
  public treatmentDescription;
  public ELEMENT_DATA: Element[];
  //@ViewChild('dataSource') dataSource: MatTableDataSource;
  public dataSource: MatTableDataSource < Element > ;
  constructor(private afs: AngularFirestore){

    this.treatmentRef = this.afs.collection("treatments");
    this.treatmentRef.valueChanges().subscribe(res=>{
      console.log(res);
      this.ELEMENT_DATA=res;

      for (let i=0;i<this.ELEMENT_DATA.length;i++){
        this.createTuple(i);
      }
     // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
   /* this.ELEMENT_DATA=this.treatmentRef.valueChanges();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);*/
  }
public createTuple(iter:number){
  let table1=document.getElementById("content");
  let tuple=document.createElement('div');
  tuple.className= "tuple";
  var code=document.createElement('div');
  code.className= "code";
  code.innerText=this.ELEMENT_DATA[iter].code.toString();
  var treatment=document.createElement('div');
  treatment.className= "treatment";
  treatment.innerText=this.ELEMENT_DATA[iter].name;
  var description=document.createElement('div');
  description.className= "description";
  description.innerText=this.ELEMENT_DATA[iter].description;
  var duration=document.createElement('div');
  duration.className= "duration";
  duration.innerText=this.ELEMENT_DATA[iter].duration;
  var price=document.createElement('div');
  price.className= "price";
  price.innerText=this.ELEMENT_DATA[iter].price.toString();
  tuple.appendChild(code);
  tuple.appendChild(treatment);
  tuple.appendChild(description);
  tuple.appendChild(duration);
  tuple.appendChild(price);
  table1.appendChild(tuple);

}
 
  }
  export interface Element {
    name: string;
    description: string;
    duration: string;
    code:number;
    price:number;
}
