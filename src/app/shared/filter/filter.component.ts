import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() dataSource!: MatTableDataSource<any>;
  @Input() title!: string;

  constructor() { }

  onClearClick(input: HTMLInputElement) {
    input.value = '';
    this.applyFilter(input);
  }

  applyFilter(input: HTMLInputElement) {
    this.dataSource.filter = input.value.trim().toLowerCase();
  }
}
