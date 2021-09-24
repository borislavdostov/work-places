import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-something-went-wrong',
  templateUrl: './something-went-wrong.component.html',
  styleUrls: ['./something-went-wrong.component.css']
})
export class SomethingWentWrongComponent implements OnInit {

  @Input() show = false;

  constructor() { }

  ngOnInit(): void {
  }

}
