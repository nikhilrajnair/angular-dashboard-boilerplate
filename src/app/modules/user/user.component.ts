import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false,
})
export class UserComponent {
  displayedColumns: string[] = ['avatar', 'name', 'email', 'role', 'status'];
  users = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      joined: '2023-01-15',
      phone: '+1 555-1234',
      address: '123 Main St, Springfield',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      status: 'Inactive',
      joined: '2022-11-03',
      phone: '+1 555-5678',
      address: '456 Elm St, Metropolis',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      role: 'Moderator',
      status: 'Active',
      joined: '2024-02-20',
      phone: '+1 555-8765',
      address: '789 Oak St, Gotham',
    },
  ];
  selectedUser = this.users[0];

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
