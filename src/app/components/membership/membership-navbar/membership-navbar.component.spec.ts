import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipNavbarComponent } from './membership-navbar.component';

describe('MembershipNavbarComponent', () => {
  let component: MembershipNavbarComponent;
  let fixture: ComponentFixture<MembershipNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipNavbarComponent]
    });
    fixture = TestBed.createComponent(MembershipNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
