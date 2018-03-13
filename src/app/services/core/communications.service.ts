import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicationsService {
  private toggleSource = new BehaviorSubject<boolean>(false);
  currentToggle = this.toggleSource.asObservable();
  constructor() { }
  
  changeToggleSource(value: boolean) {
    this.toggleSource.next(value)
  }

}
