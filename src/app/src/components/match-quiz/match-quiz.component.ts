import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-quiz',
  templateUrl: './match-quiz.component.html',
  styleUrls: ['./match-quiz.component.less']
})
export class MatchQuizComponent implements OnInit {
  questionText: string;

  constructor() {
    // this.questionText = 'FAKE QUESTION';
  }

  ngOnInit() {
  }

}
