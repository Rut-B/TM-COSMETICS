import { Component, OnInit } from '@angular/core';
import { CalendarEvent} from "angular-calendar";
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'; 


@Component({
  selector: 'app-cosmetician-calendar',
  templateUrl: './cosmetician-calendar.component.html',
 // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cosmetician-calendar.component.scss']
})
export class CosmeticianCalendarComponent implements OnInit{
 viewDate: Date;
 events//: CalendarEvent[];
 newDate:Date;
  view: string = 'day'; 
  private col:AngularFirestoreCollection<any>;
    
  constructor(private afs: AngularFirestore) { 
    this.col=this.afs.collection("events"); 
    this.viewDate = new Date();  
    this.events = this.col.valueChanges();
  }
  change(){ 
    if( this.newDate==null){
      alert("you must select a date!");
     return;
    }
    this.viewDate=new Date(this.newDate);
    this.events = this.col.valueChanges();
  }
  tomorrow(){
    this.viewDate.setDate(this.viewDate.getDate()+1);
    this.events = this.col.valueChanges();
  }
  ngOnInit() {
  }
}
