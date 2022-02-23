import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  ngOnInit(): void {
  }
  formControlName = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.formControlName.hasError('required') && this.formControlName.touched) {
      return 'You must enter a value';
    }

    return this.formControlName.hasError('name') ? 'Not a valid name' : '';
  }

  formControlEmail = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageEmail() {
    if (this.formControlEmail.hasError('required')&& this.formControlEmail.touched) {
      return 'You must enter a value';
    }

    return this.formControlEmail.hasError('email') ? 'Not a valid email' : '';
  }

  formControlNumber = new FormControl('', [Validators.required,Validators.minLength(9),Validators.maxLength(9),Validators.pattern('[0-9]*')]);

  getErrorMessageNumber() {
    if (this.formControlNumber.hasError('required') && this.formControlNumber.touched) {
      return 'You must enter a number';
    }
    if (this.formControlNumber.hasError('pattern')) {
      return 'You must enter a number';
    }
    if(this.formControlNumber.value?.length<9 && this.formControlNumber.value?.length>0 ){
      return 'Need to have 9 digits';
    }
    if(this.formControlNumber.value?.length>9){
      return 'Need to have 9 digits';
    }

    return this.formControlNumber.hasError('number') ? 'Need to have 9 digits' : '';
  }
  
  formControlInterests = new FormControl('', [Validators.required]);

  getErrorMessageInterests() {
    if (this.formControlInterests.hasError('required') && this.formControlInterests.touched) {
      return 'Choose an interest at least';
    }

    return this.formControlInterests.hasError('interests') ? 'Choose an interest' : '';
  }
}
