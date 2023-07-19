import { TestBed } from '@angular/core/testing';

import { StudentsService } from '../src/app/students.service';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
