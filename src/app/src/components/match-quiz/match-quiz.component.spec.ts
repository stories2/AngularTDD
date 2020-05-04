import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchQuizComponent } from './match-quiz.component';
import { MatchQuizInterface } from '../../interface/match-quiz.interface';


describe('MatchQuizComponent', () => {
  let component: MatchQuizComponent;
  let fixture: ComponentFixture<MatchQuizComponent>;

  let quizData: MatchQuizInterface;

  beforeEach(async(() => {
    quizData = undefined;
    TestBed.configureTestingModule({
      declarations: [ MatchQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchQuizComponent);
    component = fixture.componentInstance;
    quizData = {
      question: 'FAKE QUESTION',
      answer1: 'FAKE ANSWER1',
      answer2: 'FAKE ANSWER2',
      answer3: 'FAKE ANSWER3'
    } as MatchQuizInterface;
    component.quizData = quizData;
    fixture.detectChanges();
  });

  describe('INIT', () => {
    describe('Question TEXT', () => {

      beforeEach(async(() => {
      }));
    
      beforeEach(() => {
        fixture.detectChanges();
      });

      it(`Fake question`, () => {
        expect(fixture.nativeElement.querySelector('[data-testid="question"]').textContent).toEqual(quizData.question);
        expect(fixture.nativeElement.querySelector('[data-testid="answer1"]').textContent).toEqual(quizData.answer1);
        expect(fixture.nativeElement.querySelector('[data-testid="answer2"]').textContent).toEqual(quizData.answer2);
        expect(fixture.nativeElement.querySelector('[data-testid="answer3"]').textContent).toEqual(quizData.answer3);
      });
    })
  })
});
