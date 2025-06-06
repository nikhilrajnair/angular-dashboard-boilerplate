import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [MatCardModule, MatTableModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render dashboard cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('.dashboard-card'));
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should render the data table', () => {
    const table = fixture.debugElement.query(By.css('table[mat-table]'));
    expect(table).toBeTruthy();
  });

  it('should display fake data in the table', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('table[mat-table] tr.mat-row'));
    expect(rows.length).toBe(component.fakeData.length);
  });
});
