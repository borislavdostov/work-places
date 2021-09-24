import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-something-went-wrong',
  templateUrl: './something-went-wrong.component.html',
  styleUrls: ['./something-went-wrong.component.css']
})
export class SomethingWentWrongComponent implements OnInit {

  @Input() show = false;
  @Input() message = '';
  @Output() tryAgainEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTryAgainClick() {
    this.tryAgainEmitter.emit();
  }
}
