
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatTableModule} from '@angular/material';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { _document } from '@angular/platform-browser/src/browser';
import {DatabaseFirebaseService} from '../database-firebase.service'
import {Router} from "@angular/router";

import { DataService } from "../data.service";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
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
  public selectedTreatments :string[]=[];
  public dataSource: MatTableDataSource < Element > ;
  message:string;
  constructor(private afs: AngularFirestore,private data: DataService, public databaseFirebase: DatabaseFirebaseService,public router: Router){

    this.treatmentRef = this.afs.collection("treatments");
    let res=this.treatmentRef.valueChanges().subscribe(res=>{
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
  var code=document.createElement('div');

  var treatment=document.createElement('div');
  treatment.className= "treatment";
  treatment.innerText=this.ELEMENT_DATA[iter].name;

  code.className= "code";
  code.innerText=this.ELEMENT_DATA[iter].code.toString();
  tuple.id=iter.toString();
 
  var description=document.createElement('div');
  description.className= "description";
  description.innerText=this.ELEMENT_DATA[iter].description;
  var duration=document.createElement('div');
  duration.className= "duration";
  duration.innerText=this.ELEMENT_DATA[iter].duration;
  var price=document.createElement('div');
  price.className= "price";
  price.innerText=this.ELEMENT_DATA[iter].price.toString();

  tuple.appendChild(treatment);

  tuple.appendChild(code);
 
  tuple.appendChild(description);
  tuple.appendChild(duration);
  tuple.appendChild(price);
  tuple.addEventListener("click",this.selectTreatment, false);
  if(iter%2==1){
    tuple.style.backgroundColor="white";
  }
  table1.appendChild(tuple);


}
public selectTreatment(event) {
  let id_clicked=event.currentTarget.attributes.id.value;
  var tupleChecked=document.getElementById(id_clicked);
  if(tupleChecked.style.backgroundColor!="grey"){
     tupleChecked.style.backgroundColor="grey";
     let treat=tupleChecked.firstElementChild.innerHTML;
     this.selectedTreatments[id_clicked]=treat;
  }
  else{
    if (id_clicked%2==1){
      tupleChecked.style.backgroundColor="white";
    }
    else{
      tupleChecked.style.backgroundColor="rgb(236, 218, 232)";
    }
    
  }
  
}
  public selectTime(){
    let tups=document.getElementsByClassName("tuple");
    let total_duration=0;
    this.selectedTreatments=[];
    for (let i=0;i<tups.length;i++){
      let tup_iter=document.getElementById(i.toString());
      if(tup_iter.style.backgroundColor=="grey"){
       this.selectedTreatments.push(tups[i].firstElementChild.innerHTML);
        let dur=tup_iter.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        if (dur.indexOf(" ")!=-1){
          let SnumDur=dur.split(" ")[0];
          let numDur=parseInt(SnumDur);
         // alert(numDur);
          total_duration+=numDur;
        }
      }
    }
    this.selectedTreatments.forEach(i=>{alert(i);
  }
  );
  this.data.setTreatment(this.selectedTreatments);
    alert(total_duration);
    //this.data.setDuration(total_duration);
    this.router.navigate(["calendar"]);
  }
  }
  export interface Element {
    name: string;
    description: string;
    duration: string;
    code:number;
    price:number;
}

