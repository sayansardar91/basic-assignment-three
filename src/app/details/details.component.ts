import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  visstatus = false;
  clickDb = [];
  entryCounter = 1;

  constructor() { }

  ngOnInit() {
  }

  changeVisibility(){
    this.visstatus = !this.visstatus;
    this.clickDb.push({'sno':this.entryCounter++,'timestamp':new Date});
  }

  getColor(index_val){
    if(index_val+1 >= 5){
      return "blue";
    }
  }

}
