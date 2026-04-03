import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventflowComponent } from './eventflow.component';

describe('EventflowComponent', () => {
  let component: EventflowComponent;
  let fixture: ComponentFixture<EventflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
