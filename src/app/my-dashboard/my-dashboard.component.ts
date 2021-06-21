import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats-service/stats.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  totalStats:any
  stats = [];

  constructor(
    private statsService:StatsService
  ) { }

  ngOnInit(): void {
    this.getStatsByUser()
  }

  getStatsByUser() {
    let userId = 19;
    this.statsService.getStatsByUser(userId).subscribe(
      (res) => {
        this.totalStats = (<any>res).totalStats
        this.stats = (<any>res).stats
      },
      (err) => {}
    );
  }

}
