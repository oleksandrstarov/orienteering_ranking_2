import { GenderEnum } from '../enums/gender.enum';

export class RunnerDetailsModel {
  birth: string;
  rank: number;
  name: string;
  id: number;
  place: number;
  sex: GenderEnum;
  allStarts: number;
  team: string;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
