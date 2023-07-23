import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNavbarComponent } from './article-navbar.component';

describe('ArticleNavbarComponent', () => {
  let component: ArticleNavbarComponent;
  let fixture: ComponentFixture<ArticleNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleNavbarComponent]
    });
    fixture = TestBed.createComponent(ArticleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
