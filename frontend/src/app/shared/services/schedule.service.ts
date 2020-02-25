import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  schedule = new EventEmitter();
  interval: any;

  constructor() {
  }

  getSubscriber() {
    return this.schedule;
  }

  setSchedule(init: boolean = false) {
    if (init) {
      clearInterval(this.interval);
      this.initScheduler();
    }
    this.schedule.emit();
  }

  initScheduler() {
    this.interval = setInterval(() => {
      this.schedule.emit();
    }, 5000);
  }
}
