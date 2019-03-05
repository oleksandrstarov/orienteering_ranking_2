export class AttendersModel {
  amount: number;
  fullname: string;
  id: number;
  period: string;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
