import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{

  @Input() title = '';
  @Input() buttonTitle = '';
  @Output() newClicked = new EventEmitter();

  constructor() { }

  buttonHandler(){
    this.newClicked.emit();
  }
}
