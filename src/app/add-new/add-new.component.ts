import { Component, OnInit } from '@angular/core';
import { DatabaseFirebaseService } from '../database-firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  constructor(public databaseFirebase: DatabaseFirebaseService, private router: Router) {
  }
  ngOnInit() {
  }
  public addCustomer() {
    if (this.databaseFirebase.IsNotEmpty()) {
      this.databaseFirebase.addCustomer();
      this.router.navigate(["home"]);
    }
  }
}
