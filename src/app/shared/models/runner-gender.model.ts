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

  constructor (data: any) {
    Object.assign(this, data);
  }
}
