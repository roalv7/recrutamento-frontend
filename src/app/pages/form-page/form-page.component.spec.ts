import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { FormPageComponent } from './form-page.component';

describe('FormPageComponent', () => {
  let component: FormPageComponent;
  let fixture: ComponentFixture<FormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        ReactiveFormsModule, MatSnackBarModule,RouterTestingModule 
      ],
      declarations: [ FormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an interests input', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-interests-input')).not.toBeNull();
  });

  it('should have an message input', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-message-input')).not.toBeNull();
  });

  it('should have a button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-button-input')).not.toBeNull();
  });

  it('should have 3 text inputs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.querySelectorAll('app-text-input');
    expect(input.length).toBe(3);
    for(let i = 0 ; i < input.length ; i++){
      expect(input[i]).not.toBeNull();
    }
  });

 /* it('should have interests input', () => {
    const interest = component.interests;
    console.warn("#############3",interest);
    expect(interest).not.toEqual([]);
  });*/
});
