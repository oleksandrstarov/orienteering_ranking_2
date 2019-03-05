import * as moment from 'moment';
import * as env from '../constants/enviroments';

export default class AdminService {
  async getResponse(url, data) {
    data.headers = {'Content-Type': 'application/json'};
    const res = await fetch(`${env.BASE_URL}${url}`, data);
    if (!res.ok) {
      window.parent.postMessage({ error: true }, '*');
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return res.json();
  }

  // admin competitions functions

  async getCompetitions() {
    const response = await this.getResponse('/competitions', { method: 'GET' });
    return response
      .sort((first, second) => ((first.DATE < second.DATE) ? 1 : -1))
      .map(res => ({
        id: res.ID,
        name: res.NAME,
        date: moment(res.DATE).format('YYYY-MM-DD'),
        runners: res.RUNNERS,
        status: res.STATUS,
        isAllowed: res.IS_ALLOWED,
        isAllowedUpdated: res.IS_ALLOWED,
        link: res.URL,
      }));
  }

  async saveCompetition(data) {
    await this.getResponse('/competitions/updateCompetitionDetails', {
      method: 'PUT',
      
      body: JSON.stringify({ data }),
    });
  }

  async addCompetition(data) {
    await this.getResponse('/competitions/addCompetition', {
      method: 'PUT',
      
      body: JSON.stringify({ data }),
    });
  }

  async recalculateCompetitions(data) {
    await this.getResponse('/competitions/recalculate', {
      method: 'PUT',
      
      body: JSON.stringify({ data }),
    });
  }

  async totalDropCompetitions() {
    await this.getResponse('/competitions/drop', {
      method: 'PUT',
      
      body: JSON.stringify({}),
    });
  }

  // admin runners functions
  async getRunners() {
    const response = await this.getResponse('/runners', { method: 'GET' });
    return response.man
      .concat(response.woman)
      .sort((first, second) => ((first.FULLNAME > second.FULLNAME) ? 1 : ((second.FULLNAME > first.FULLNAME) ? -1 : 0)))
      .map(res => ({
        curPlace: res.CUR_PLACE,
        curRank: res.CUR_RANK,
        name: res.FULLNAME,
        id: res.ID,
        place: res.PLACE,
        placeDiff: res.PLACE_DIFF,
        points: res.POINTS,
        pointsDiff: res.POINTS_DIFF,
        sex: res.SEX,
        subjective: res.SUBJECTIVE,
        team: res.TEAM,
        checked: false,
        isVisible: true,
      }));
  }

  async saveMergedRunners(data) {
    data = data.map((el) => {
      el.duplicates = el.duplicates.map(runner => ({
        CUR_PLACE: runner.curPlace,
        CUR_RANK: runner.curRank,
        FULLNAME: runner.name,
        ID: runner.id,
        PLACE: runner.place,
        PLACE_DIFF: runner.placeDiff,
        POINTS: runner.points,
        POINTS_DIFF: runner.pointsDiff,
        SEX: runner.sex,
        SUBJECTIVE: runner.subjective,
        TEAM: runner.team,
      }));
      el.main = {
        CUR_PLACE: el.main.curPlace,
        CUR_RANK: el.main.curRank,
        FULLNAME: el.main.name,
        ID: el.main.id,
        PLACE: el.main.place,
        PLACE_DIFF: el.main.placeDiff,
        POINTS: el.main.points,
        POINTS_DIFF: el.main.pointsDiff,
        SEX: el.main.sex,
        SUBJECTIVE: el.main.subjective,
        TEAM: el.main.team,
      };
      return {
        duplicates: el.duplicates,
        main: el.main,
      };
    });
    await this.getResponse('/runners/merge', {
      method: 'PUT',
      
      body: JSON.stringify(data),
    });
  }

  async updateSingleRunner(data) {
    await this.getResponse('/runners/update', {
      method: 'PUT',
      
      body: JSON.stringify({
        data: {
          CUR_PLACE: data.curPlace,
          CUR_RANK: data.curRank,
          FULLNAME: data.name,
          ID: data.id,
          PLACE: data.place,
          PLACE_DIFF: data.placeDiff,
          POINTS: data.points,
          POINTS_DIFF: data.pointsDiff,
          SEX: data.sex,
          SUBJECTIVE: data.subjective,
          TEAM: data.team,
        },
      }),
    });
  }
}
