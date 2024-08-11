import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ ]
}) 
export class HomeComponent implements OnInit {

  constructor(public router:Router,private shared_service:SharedService) { }

  ngOnInit(): void {
  }

}
