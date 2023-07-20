import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationNavbarComponent } from './association-navbar.component';

describe('AssociationNavbarComponent', () => {
  let component: AssociationNavbarComponent;
  let fixture: ComponentFixture<AssociationNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociationNavbarComponent]
    });
    fixture = TestBed.createComponent(AssociationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
