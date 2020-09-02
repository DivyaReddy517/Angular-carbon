import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  
  list: any[];

  ngOnInit() {
    this.list = [
      {
        id: 1,
        title: 'java',
        checked: true,
      },
      {
        id: 2,
        title: 'HTML',
        checked: false,
      },
      {
        id: 3,
        title: 'Angular',
        checked: true,
      },
      {
        id: 4,
        title: 'MongoDb',
        checked: false,
      },
    ]
  }

  get result() {
    return this.list.filter(item => item.checked);
  }
  
}

  
