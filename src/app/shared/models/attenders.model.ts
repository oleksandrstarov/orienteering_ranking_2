export class AttendersModel {
  amount: number;
  fullName: string;
  id: number;
  period: string;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
