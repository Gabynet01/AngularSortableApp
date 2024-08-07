import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sortable-table',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './sortable-table.component.html',
  styleUrl: './sortable-table.component.scss',
})
export class SortableTableComponent implements OnInit {
  users: any[] = [];
  sortedColumn: string = '';
  sortAscending: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        this.users = data;
      });
  }

  sort(column: string): void {
    this.sortedColumn = column;
    this.sortAscending = !this.sortAscending;
    this.users.sort((a, b) => {
      if (a[column] < b[column]) {
        return this.sortAscending ? -1 : 1;
      } else if (a[column] > b[column]) {
        return this.sortAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
