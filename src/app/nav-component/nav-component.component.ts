import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {
  @Input() text:string;
  @Input() url:string;
  @Input() image:string;
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.image)
  }

}
