import { Component, ElementRef, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() dataSource!: MatTableDataSource<any>;
  @Input() title = '';

  constructor() { }

  applyFilter(input: HTMLInputElement) {
    this.dataSource.filter = input.value.trim().toLowerCase();
  }

  onClearClick(input: HTMLInputElement){
    input.value = '';
    this.applyFilter(input);
  }
}
