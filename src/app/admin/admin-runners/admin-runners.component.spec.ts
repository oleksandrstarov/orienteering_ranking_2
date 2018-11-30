import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRunnersComponent } from './admin-runners.component';

describe('AdminRunnersComponent', () => {
  let component: AdminRunnersComponent;
  let fixture: ComponentFixture<AdminRunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
