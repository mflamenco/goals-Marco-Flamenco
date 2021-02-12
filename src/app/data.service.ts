import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goal', 'Travel to Japan', 'Another goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal:any) {
    this.goals.next(goal);
  }
}
