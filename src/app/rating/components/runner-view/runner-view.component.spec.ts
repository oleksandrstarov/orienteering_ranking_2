import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerViewComponent } from './runner-view.component';

describe('RunnerViewComponent', () => {
  let component: RunnerViewComponent;
  let fixture: ComponentFixture<RunnerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
