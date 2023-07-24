import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEditComponent } from './publication-edit.component';

describe('PublicationEditComponent', () => {
  let component: PublicationEditComponent;
  let fixture: ComponentFixture<PublicationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationEditComponent]
    });
    fixture = TestBed.createComponent(PublicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
