import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
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
