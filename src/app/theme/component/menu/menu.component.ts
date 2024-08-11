import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ ]
})


export class MenuComponent implements OnInit {

  nav_items = [{name:'Home',link:'home'},{name:'Movie List',link:'stream'}]

  constructor(public router:Router,private shared_service:SharedService) { }

  ngOnInit(): void {
    console.log(this.nav_items);
    
  }

}
