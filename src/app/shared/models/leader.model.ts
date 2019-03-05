export class LeaderModel {
  duration: number;
  fullname: string;
  id: number;
  place: number;
  points: number;
  sex: string;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
