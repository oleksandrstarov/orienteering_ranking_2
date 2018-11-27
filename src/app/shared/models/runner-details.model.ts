export class RunnerDetailsModel {
  birth: string;
  rank: number;
  name: string;
  id: number;
  place: number;
  allStarts: number;
  team: string;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
