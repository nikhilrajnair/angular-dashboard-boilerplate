import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false,
})
export class UserComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['avatar', 'name', 'email', 'country'];
  users: any[] = [];
  selectedUser: any = null;

  page = 1;
  results = 10;
  search = '';
  totalResults = 100;
  loading = false;
  private userSub?: Subscription;

  constructor(private userSerivce: UserService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }

  fetchUsers() {
    this.loading = true;
    this.userSub?.unsubscribe();
    this.userSub = this.userSerivce.getUsers(this.page, this.results, this.search).subscribe((res) => {
      this.users = res.results;
      this.loading = false;
      this.selectedUser = this.users.length > 0 ? this.users[0] : null;
    });
  }

  onPageChange(event: any) {
    this.page = event.pageIndex + 1;
    this.results = event.pageSize;
    this.fetchUsers();
  }

  onSearch() {
    this.page = 1;
    this.fetchUsers();
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }

  // get filteredUsers() {
  //   if (!this.search) return this.users;
  //   return this.users.filter(
  //     (u) =>
  //       `${u.name.first} ${u.name.last}`.toLowerCase().includes(this.search.toLowerCase()) ||
  //       u.email.toLowerCase().includes(this.search.toLowerCase())
  //   );
  // }
}
