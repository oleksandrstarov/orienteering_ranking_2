export class CompetitionViewRunnersModel {
  group: string;
  date: string;
  timeBehind: string;
  name: string;
  points: number;
  time: string;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
