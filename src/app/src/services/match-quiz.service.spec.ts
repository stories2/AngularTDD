import { TestBed } from '@angular/core/testing';

import { MatchQuizService } from './match-quiz.service';

describe('MatchQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchQuizService = TestBed.get(MatchQuizService);
    expect(service).toBeTruthy();
  });
});
