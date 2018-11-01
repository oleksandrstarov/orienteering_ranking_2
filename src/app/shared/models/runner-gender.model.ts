export class RunnerGenderModel {
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

  constructor (data: any) {
    Object.assign(this, data);
    if (this.placeDiff === null) {
      this.state = 'new';
      this.info = 'Новый спортсмен';
    } else if (this.placeDiff === 0) {
      this.state = 'stable';
      this.info = 'Место - ' + this.placeDiff + ' Очки - ' + this.pointsDiff;
    } else if (this.placeDiff > 0) {
      this.state = 'up';
      this.info = 'Место - (' + this.placeDiff + ') Очки - (' + this.pointsDiff + ')';
    } else if (this.placeDiff < 0) {
      this.state = 'down';
      this.info = 'Место - (' + this.placeDiff + ') Очки - (' + this.pointsDiff + ')';
    }
  }
}
