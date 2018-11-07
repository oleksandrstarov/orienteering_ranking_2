export class RunnerResultsModel {
  date: string;
  name: string;
  competition: number;
  group: string;
  time: string;
  place: number;
  points: number;
  actualResult: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
