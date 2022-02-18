import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  
  @Input()
  labelName: string = "";
  
  @Input()
  typeName: string = "";

  @Input()
  inputName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
