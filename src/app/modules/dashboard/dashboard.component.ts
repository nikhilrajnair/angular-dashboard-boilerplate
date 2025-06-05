import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  displayedColumns: string[] = ['date', 'name', 'amount'];
  fakeData = [
    { date: '2025-06-01', name: 'John Doe', amount: '$120' },
    { date: '2025-06-02', name: 'Jane Smith', amount: '$340' },
    { date: '2025-06-03', name: 'Alice Brown', amount: '$560' },
    { date: '2025-06-04', name: 'Bob White', amount: '$90' },
  ];
}
