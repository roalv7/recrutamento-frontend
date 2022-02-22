import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-interests-input',
  templateUrl: './interests-input.component.html',
  styleUrls: ['./interests-input.component.scss']
})
export class InterestsInputComponent implements OnInit {

  toppings = new FormControl("BAckend");
  toppingList: string[] = ['Backend', 'Frontend', 'Machine Learning', 'Data Science'];

  @Input()
  formControlInput = new FormControl();
  
  constructor() { }

  ngOnInit(): void {
  }

}
