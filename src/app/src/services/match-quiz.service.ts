import { Injectable } from '@angular/core';
import { AsyncSpyable } from 'jasmine-auto-spies';
import { Observable } from 'rxjs';
import { MatchQuizInterface } from '../interface/match-quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class MatchQuizService {

  constructor() { }

  @AsyncSpyable()
  getRandomQuestion(): Observable<MatchQuizInterface> {
    throw new Error("Method not implemented.");
  }
}
