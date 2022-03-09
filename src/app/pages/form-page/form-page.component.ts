import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  
  constructor(private _router: Router, private _httpClient: HttpClient,private _snackBar: MatSnackBar){
    
  }

  //disable = false;
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

  formControlMessage = new FormControl();
  

  submitHandle(){
    //this.disable = true;
    const user = {
      Name: this.formControlName.value,
      Email: this.formControlEmail.value,
      Number: this.formControlNumber.value,
      Interests: this.formControlInterests.value,
      Message: this.formControlMessage.value
    };
    this._httpClient.post('https://localhost:7082/User',user).subscribe((response) =>{
      console.log("response do request http",response);
      this._router.navigate(["thanksPage"]);
    },
      (error) => {
        this._snackBar.open(error.error,"X", {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 4000,
        });
        console.log(error.error)
      },
      () => console.log("SUCCESS")

    
    );
  }
}
