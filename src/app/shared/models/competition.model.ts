import { CompetitionStatus } from '../enums/competition-status.enum';

export class Competition {
  date: Date;
  id: number;
  name: string;
  notes: string;
  runners: number;

  private competitionStatus: CompetitionStatus;

  constructor (data: any) {

    Object.assign(this, data);
  }
  set status(status: CompetitionStatus) {
    this.competitionStatus = CompetitionStatus[status];
  }

  get status(): CompetitionStatus {
    return this.competitionStatus;
  }
}
