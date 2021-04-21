import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'A11';
  Minutes: Observable<Number>;

  constructor(private s_timer: TimerService, private router: Router) {
    this.Minutes = s_timer.Minutes;
  }

  ngOnInit(): void {
    this.s_timer.startTime();
  }

  stoptime = () => {
    this.s_timer.stopTime();
  }

  goTrainer = () => {
    this.router.navigate(['/trainer']);
  }
}
