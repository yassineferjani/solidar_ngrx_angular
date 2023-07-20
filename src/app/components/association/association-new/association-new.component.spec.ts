import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationNewComponent } from './association-new.component';

describe('AssociationNewComponent', () => {
  let component: AssociationNewComponent;
  let fixture: ComponentFixture<AssociationNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociationNewComponent]
    });
    fixture = TestBed.createComponent(AssociationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
