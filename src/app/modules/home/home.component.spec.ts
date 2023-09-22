import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let app: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    app = fixture.componentInstance;
  });

  it('should create home component', () => {
    expect(app).toBeTruthy();
  });
});
