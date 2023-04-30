import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  isLightTheme!: boolean;

  constructor(private themeService: ThemeService) {}

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  ngOnInit() {
    this.isLightTheme = this.themeService.isLightTheme();
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    this.themeService.setTheme(this.isLightTheme);
  }

}
