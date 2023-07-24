import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationNavbarComponent } from './publication-navbar.component';

describe('PublicationNavbarComponent', () => {
  let component: PublicationNavbarComponent;
  let fixture: ComponentFixture<PublicationNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationNavbarComponent]
    });
    fixture = TestBed.createComponent(PublicationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
