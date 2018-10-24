export class Runner {
  number: number;
  name: string;
  club: string;
  points: number;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
