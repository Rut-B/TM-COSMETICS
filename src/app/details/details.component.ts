
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatTableModule} from '@angular/material';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public treatmentRef;
  public treatmentDescription;
  public ELEMENT_DATA: Element[];
  public dataSource: MatTableDataSource < Element > ;
  constructor(private afs: AngularFirestore){
    this.treatmentRef = this.afs.collection("treatments");
    this.treatmentRef.valueChanges().subscribe(res=>{
      console.log(res);
      this.ELEMENT_DATA=res;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
  }

 
  
   displayedColumns = ['code', 'treatment', 'description', 'duration','price'];
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  }
  export interface Element {
    treatment: string;
    description: string;
    duration: string;
    code:number;
    price:number;
}