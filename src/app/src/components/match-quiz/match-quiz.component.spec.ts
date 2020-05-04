import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchQuizComponent } from './match-quiz.component';
import { MatchQuizInterface } from '../../interface/match-quiz.interface';


describe('MatchQuizComponent', () => {
  let component: MatchQuizComponent;
  let fixture: ComponentFixture<MatchQuizComponent>;

  let fakeQuestionText: string;
  let fakeAnswer1 = '';
  let fakeAnswer2 = '';
  let fakeAnswer3 = '';

  let quizData: MatchQuizInterface;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchQuizComponent ]
    })
    .compileComponents();
    fakeQuestionText = undefined;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('INIT', () => {
    describe('Question TEXT', () => {

      beforeEach(async(() => {
        fakeQuestionText = 'FAKE QUESTION';
        component.questionText = fakeQuestionText;
      }));
    
      beforeEach(() => {
        fixture.detectChanges();
      });

      it(`Fake question equal with ${fakeQuestionText}`, () => {
        // fixture.nativeElement.queryByTestId('question');
        expect(fixture.nativeElement.querySelector('[data-testid="question"]').textContent).toEqual(fakeQuestionText);
        expect(fixture.nativeElement.querySelector('[data-testid="question"]').textContent).toEqual(fakeQuestionText);
        expect(fixture.nativeElement.querySelector('[data-testid="question"]').textContent).toEqual(fakeQuestionText);
        expect(fixture.nativeElement.querySelector('[data-testid="question"]').textContent).toEqual(fakeQuestionText);
      });
    })
  })
});
