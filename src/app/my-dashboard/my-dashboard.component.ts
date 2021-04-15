import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  user:string;

  constructor(
  ) {
    this.user = "myDashboard";
  }

  ngOnInit(): void {
  }

}
