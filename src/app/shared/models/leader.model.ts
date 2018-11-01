export class LeaderModel {
  duration: number;
  fullName: string;
  id: number;
  place: number;
  points: number;
  sex: string;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
