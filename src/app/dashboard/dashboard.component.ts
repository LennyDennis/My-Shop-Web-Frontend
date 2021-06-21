import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats-service/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalStats:any
  stats = [];

  constructor(
    private statsService:StatsService
  ) { }

  ngOnInit(): void {
    this.getStats()
  }

  getStats() {
    this.statsService.getStats().subscribe(
      (res) => {
        this.totalStats = (<any>res).totalStats
        this.stats = (<any>res).stats
      },
      (err) => {}
    );
  }

}
