import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

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

  // Bar Chart
  barChartOptions: ChartConfiguration['options'] = { responsive: true };
  barChartType: ChartType = 'bar';
  barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{ data: [65, 59, 80, 81, 56], label: 'Sales' }],
  };

  // Line Chart
  lineChartOptions: ChartConfiguration['options'] = { responsive: true };
  lineChartType: ChartType = 'line';
  lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{ data: [12, 19, 3, 5, 2], label: 'Visitors' }],
  };

  // Pie Chart
  pieChartOptions: ChartConfiguration['options'] = { responsive: true };
  pieChartType: ChartType = 'pie';
  pieChartData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
    datasets: [{ data: [300, 500, 100] }],
  };
}
