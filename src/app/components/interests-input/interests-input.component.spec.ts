import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsInputComponent } from './interests-input.component';

describe('InterestsInputComponent', () => {
  let component: InterestsInputComponent;
  let fixture: ComponentFixture<InterestsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
