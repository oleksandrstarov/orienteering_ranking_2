export class CompetitionViewRunnersModel {
  group: string;
  date: string;
  timeBehind: string;
  name: string;
  points: number;
  time: string;
  runnerId: number;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
