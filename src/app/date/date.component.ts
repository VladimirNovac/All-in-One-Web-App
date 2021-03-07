import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit, OnDestroy {

  name = 'Angular';
  time = new Date();
  timer: any;
  month: string = "";

  monthNames: string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
    this.month = this.monthNames[this.time.getMonth()];
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

  
}


