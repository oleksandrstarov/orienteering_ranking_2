import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRatingComponent } from './about-rating.component';

describe('AboutRatingComponent', () => {
  let component: AboutRatingComponent;
  let fixture: ComponentFixture<AboutRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
