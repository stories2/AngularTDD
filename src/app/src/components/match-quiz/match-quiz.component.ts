import { Component, OnInit } from '@angular/core';
import { MatchQuizInterface } from '../../interface/match-quiz.interface';

@Component({
  selector: 'app-match-quiz',
  templateUrl: './match-quiz.component.html',
  styleUrls: ['./match-quiz.component.less']
})
export class MatchQuizComponent implements OnInit {
  quizData: MatchQuizInterface;

  constructor() {
  }

  ngOnInit() {
  }

}
