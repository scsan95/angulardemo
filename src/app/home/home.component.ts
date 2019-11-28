import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

emps:any;


  constructor(public service:DataService) 
  {

   }

  ngOnInit() {

    let observableResult= this.service.Select();

    observableResult.subscribe((result)=>{
console.log(result);

this.emps=result;

    });

    // this.emps=[

    //  {"No":11,"Name":"abc","Age":45},
    //  {"No":22,"Name":"def","Age":36},
    //  {"No":33,"Name":"xyz","Age":51},


    // ];
  }

}
