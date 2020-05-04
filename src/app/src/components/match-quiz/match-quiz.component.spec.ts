import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchQuizComponent } from './match-quiz.component';


describe('MatchQuizComponent', () => {
  let component: MatchQuizComponent;
  let fixture: ComponentFixture<MatchQuizComponent>;

  let fakeQuestionText = 'FAKE QUESTION';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchQuizComponent ]
    })
    .compileComponents();
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
        component.questionText = fakeQuestionText;
      }));
    
      beforeEach(() => {
        fixture.detectChanges();
      });

      it(`Fake question equal with ${fakeQuestionText}`, () => {
        // fixture.nativeElement.queryByTestId('question');
        expect(fixture.nativeElement.querySelector('[data-testid="question"]').textContent).toEqual(fakeQuestionText);
      });
    })
  })
});
