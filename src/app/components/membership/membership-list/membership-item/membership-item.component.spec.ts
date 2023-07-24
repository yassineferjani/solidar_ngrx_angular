import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipItemComponent } from './membership-item.component';

describe('MembershipItemComponent', () => {
  let component: MembershipItemComponent;
  let fixture: ComponentFixture<MembershipItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipItemComponent]
    });
    fixture = TestBed.createComponent(MembershipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
