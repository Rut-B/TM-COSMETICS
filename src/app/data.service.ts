import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class DataService {
    private subject = new Subject<any>();
 
    /*sendMessage(message: string) {
        this.subject.next({ text: message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }*/
    setTreatment(treatment){
      this.subject.next({text:treatment});
    }
    getTreatment():Observable<any> {
      return this.subject.asObservable();
  }
   /* setDuration(dur){
      this.messageSource.next(dur);
    }*/
}
/*export class DataService {
  private messageSource = new BehaviorSubject<string>("default message");
  //currentMessage = this.messageSource.asObservable();
  private messageSource1 = new BehaviorSubject<string>("default treatment");
  treatments=this.messageSource.asObservable();
  duration = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  } 
  setTreatment(treatment){
    this.messageSource1.next(treatment);
  }
  setDuration(dur){
    this.messageSource.next(dur);
  }
}*/
