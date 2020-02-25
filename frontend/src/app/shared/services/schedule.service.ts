import {Injectable} from '@angular/core';
import {defer, Observable} from 'rxjs';
import {delay, repeatWhen} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private provider: () => Promise<any>;
  private subscriber: (value: any) => void;
  private subscription: any = null;
  private source: Observable<any>;

  constructor() {
  }

  private clearSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  register(provider: () => Promise<any>, subscriber: (value: any) => void) {
    this.clearSubscription();
    this.provider = provider;
    this.subscriber = subscriber;
    this.source = defer(this.provider).pipe(repeatWhen(nt => nt.pipe(delay(5000))));
    this.subscription = this.source.subscribe(this.subscriber);
  }

  stop() {
    this.clearSubscription();
  }

  restart() {
    if (!this.subscription) {
      this.subscription = this.source.subscribe(this.subscriber);
    }
  }
}
