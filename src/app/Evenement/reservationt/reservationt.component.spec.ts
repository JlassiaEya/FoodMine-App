import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationtComponent } from './reservationt.component';

describe('ReservationtComponent', () => {
  let component: ReservationtComponent;
  let fixture: ComponentFixture<ReservationtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationtComponent]
    });
    fixture = TestBed.createComponent(ReservationtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
