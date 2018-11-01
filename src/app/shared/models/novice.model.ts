export class NoviceModel {
  fullName: string;
  currentPlace: number;
  currentPoints: number;
  id: number;
  place?: number;
  placeDiff?: number;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
