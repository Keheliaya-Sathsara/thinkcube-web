import { TestBed } from '@angular/core/testing';
import { EventflowService } from './eventflow.service';

describe('EventflowService', () => {
  let service: EventflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});