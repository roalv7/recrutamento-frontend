import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-input',
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.scss']
})
export class ButtonInputComponent implements OnInit {

  @Input()
  formName = new FormControl();

  @Input()
  formEmail = new FormControl();

  @Input()
  formNumber = new FormControl();
  
  @Input()
  formInterests = new FormControl();
  
  constructor() { }

  ngOnInit(): void {
  }

}
