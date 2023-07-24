import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipEditComponent } from './membership-edit.component';

describe('MembershipEditComponent', () => {
  let component: MembershipEditComponent;
  let fixture: ComponentFixture<MembershipEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipEditComponent]
    });
    fixture = TestBed.createComponent(MembershipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
