import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-angularpipe',
  templateUrl: './angularpipe.component.html',
  styleUrls: ['./angularpipe.component.css']
})
export class AngularpipeComponent implements OnInit {

  datePipeString : string;

  constructor(private datePipe: DatePipe) { 
    this.datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd');
    console.log(this.datePipeString);
    //2019-07-22
  }


  ngOnInit(): void {
  }

}
