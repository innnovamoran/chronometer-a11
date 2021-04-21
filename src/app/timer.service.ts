import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  interval: any;
  minutes: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor() { }

  get Minutes(): Observable<Number> {
    return this.minutes.asObservable();
  }

  setTime = () => {
    if (this.minutes.value < 60) {
      this.minutes.next(this.minutes.value + 1);
    } else {
      this.minutes.next(1);
    }
  }

  startTime = () => {
    this.interval = setInterval(this.setTime, 1000)
  }

  stopTime = () => {
    clearInterval(this.interval);
  }


}
