import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-something-went-wrong',
  templateUrl: './something-went-wrong.component.html',
  styleUrls: ['./something-went-wrong.component.css']
})
export class SomethingWentWrongComponent {

  @Input() show = false;
  @Input() message!: string;
  @Output() tryAgainEmitter = new EventEmitter();

  constructor() { }

  onTryAgainClick() {
    this.tryAgainEmitter.emit();
  }
}
