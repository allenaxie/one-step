import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationBarComponent } from './navigation-bar.component';

describe('NavigationBarComponent', () => {
  let fixture: ComponentFixture<NavigationBarComponent>;
  let app: NavigationBarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarComponent],
      imports: [MatIconModule, MatButtonModule, MatToolbarModule],
    });

    fixture = TestBed.createComponent(NavigationBarComponent);
    fixture.detectChanges();
    app = fixture.componentInstance;
  });

  it('should create nav component', () => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
