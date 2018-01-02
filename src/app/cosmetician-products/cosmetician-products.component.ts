import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {DatabaseFirebaseService} from '../database-firebase.service'
@Component({
  selector: 'app-cosmetician-products',
  templateUrl: './cosmetician-products.component.html',
  styleUrls: ['./cosmetician-products.component.scss']
})
export class CosmeticianProductsComponent implements OnInit {

  ngOnInit() {
  }
  
}
