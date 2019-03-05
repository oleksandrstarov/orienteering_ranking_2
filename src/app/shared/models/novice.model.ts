export class NoviceModel {
  fullname: string;
  currentPlace: number;
  id: number;
  place?: number;
  placeDiff?: number;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
