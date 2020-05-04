import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchQuizComponent } from './match-quiz.component';
import { MatchQuizInterface } from '../../interface/match-quiz.interface';
import { MatchQuizService } from '../../services/match-quiz.service';
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';


describe('MatchQuizComponent', () => {
  let component: MatchQuizComponent;
  let fixture: ComponentFixture<MatchQuizComponent>;
  let serviceSpy: Spy<MatchQuizService>;

  let quizData: MatchQuizInterface;

  beforeEach(async(() => {
    quizData = undefined;
    TestBed.configureTestingModule({
      declarations: [ MatchQuizComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchQuizComponent);
    component = fixture.componentInstance;

    serviceSpy = createSpyFromClass(MatchQuizService);
    fixture.detectChanges();
  });

  describe('INIT', () => {
    describe('Question TEXT', () => {

      beforeEach(async(() => {
        quizData = {
          question: 'FAKE QUESTION',
          answer1: 'FAKE ANSWER1',
          answer2: 'FAKE ANSWER2',
          answer3: 'FAKE ANSWER3'
        } as MatchQuizInterface;
        component.quizData = quizData;

        // 1. fetch data from server
        // 2. select random quiz
        // 3. remove the selected question from the list

        serviceSpy.getRandomQuestion.and.nextWith(quizData);
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

  describe('Fetch', () => {
    
  })
});
