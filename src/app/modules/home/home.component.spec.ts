import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ThemeService } from 'src/config/theme.service';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let app: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ThemeService],
    });

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    app = fixture.componentInstance;
  });

  it('should create home component', () => {
    expect(app).toBeTruthy();
  });

  it('should always be dark theme in home component', () => {});
});
