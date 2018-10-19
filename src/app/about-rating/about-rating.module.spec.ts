import { AboutRatingModule } from './about-rating.module';

describe('AboutRatingModule', () => {
  let aboutRatingModule: AboutRatingModule;

  beforeEach(() => {
    aboutRatingModule = new AboutRatingModule();
  });

  it('should create an instance', () => {
    expect(aboutRatingModule).toBeTruthy();
  });
});
