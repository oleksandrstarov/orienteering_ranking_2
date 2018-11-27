import {
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutRatingComponent } from './about-rating.component';
import { AboutService } from '../core/api/about/about.service';
import { PreloaderComponent } from '../shared/components/preloader/preloader.component';

describe('AboutRatingComponent', () => {
  let component: AboutRatingComponent;
  let fixture: ComponentFixture<AboutRatingComponent>;
  const mockGroups = [
    {
      name: 'M21E',
      points: 10
    },
    {
      name: 'M21A',
      points: 20
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutRatingComponent,
        PreloaderComponent
      ],
      imports: [
        MatExpansionModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule
      ],
      providers: [
        MockProvider({
          provider: AboutService,
          overwrite: {
            getGroups(): Observable<any> {
              return of(mockGroups);
            }
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRatingComponent);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AboutRatingComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call getStats and save data', inject([AboutService], (service: AboutService) => {
    spyOn(service, 'getGroups').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(service.getGroups).toHaveBeenCalled();
    expect(component.data.length).toBe(2);
    expect(component.data[0].name).toBe('M21E');
    expect(component.data[1].points).toBe(20);
  }));
});
