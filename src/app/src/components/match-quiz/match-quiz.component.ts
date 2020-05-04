import { Component, OnInit } from '@angular/core';
import { MatchQuizInterface } from '../../interface/match-quiz.interface';
import { MatchQuizService } from '../../services/match-quiz.service';

@Component({
  selector: 'app-match-quiz',
  templateUrl: './match-quiz.component.html',
  styleUrls: ['./match-quiz.component.less']
})
export class MatchQuizComponent implements OnInit {
  quizData: MatchQuizInterface = {
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
  } as MatchQuizInterface;

  constructor(private quizService: MatchQuizService) {
  }

  ngOnInit() {
    this.quizService.getRandomQuestion()
      .subscribe(questionData => this.quizData = questionData)
  }

}
