import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-interests-input',
  templateUrl: './interests-input.component.html',
  styleUrls: ['./interests-input.component.scss']
})
export class InterestsInputComponent implements OnInit {

  

  @Input()
  interestList: string[] = [];


  @Input()
  formControlInput = new FormControl();
  
  constructor() { }

  ngOnInit(): void {
  }

}
