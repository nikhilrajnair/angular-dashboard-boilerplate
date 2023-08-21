import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() closeSidebar: EventEmitter<void> = new EventEmitter<void>();
  sidebarOpened: boolean = true;

  onCloseSidebar(): void {
    this.closeSidebar.emit();
  }

  onToggleSidebar(): void {
    this.sidebarOpened = !this.sidebarOpened;
  }
}

// how to map a array of objects to an array of objects?

// class User {
//   firstName: string;
//   lastName: string;
//   email: string;

//   constructor(firstName: string, lastName: string, email: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//   }

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   doesEmailMatch(email: string): boolean {
//     return this.email === email;
//   }
// }
