import { RunnerStateEnum } from '../enums/runner-state.enum';

export class RunnerRatingModel {
  currentPlace: number;
  currentRank: number;
  fullName: string;
  id: number;
  place: number;
  placeDiff: number;
  points: number;
  pointsDiff: number;
  subjective: string;
  team: string;
  state: string;
  info: string;
  correction: number;

  constructor (data: any) {
    Object.assign(this, data);
    this.setState();
  }

  private setState(): void {
    if (this.placeDiff === null) {
      this.state = RunnerStateEnum.NEW;
      this.info = 'Новый спортсмен';
      return;
    }
    if (this.placeDiff === 0) {
      this.state = RunnerStateEnum.STABLE;
    }
    if (this.placeDiff > 0) {
      this.state = RunnerStateEnum.UP;
    }
    if (this.placeDiff < 0) {
      this.state = RunnerStateEnum.DOWN;
    }
    this.info = `Место - (${this.placeDiff}) Очки - (${this.pointsDiff})`;
  }
}
