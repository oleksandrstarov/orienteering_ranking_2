import { RunnerRatingModel } from './runner-rating.model';

describe('HeaderComponent', () => {

  const mockDataUp = {
    currentPlace: 34,
    currentRank: 2,
    fullName: 'Oleg',
    id: 2341,
    place: 2,
    placeDiff: 3,
    points: 4.5,
    pointsDiff: 9.7,
    subjective: 'Data',
    team: 'First',
    state: '',
    info: 'string',
    correction: 2
  };

  const mockDataStable = {
    currentPlace: 34,
    currentRank: 2,
    fullName: 'Oleg',
    id: 2341,
    place: 2,
    placeDiff: 0,
    points: 4.5,
    pointsDiff: 9.7,
    subjective: 'Data',
    team: 'First',
    state: '',
    info: 'string',
    correction: 2
  };

  const mockDataDown = {
    currentPlace: 34,
    currentRank: 2,
    fullName: 'Oleg',
    id: 2341,
    place: 2,
    placeDiff: -3,
    points: 4.5,
    pointsDiff: 9.7,
    subjective: 'Data',
    team: 'First',
    state: '',
    info: 'string',
    correction: 2
  };

  it('should create RunnerRatingModel', () => {
    const resUp = new RunnerRatingModel(mockDataUp);
    expect(resUp.state).toBe('up');

    const resDown = new RunnerRatingModel(mockDataDown);
    expect(resDown.state).toBe('down');

    const resStable = new RunnerRatingModel(mockDataStable);
    expect(resStable.state).toBe('stable');
  });
});
