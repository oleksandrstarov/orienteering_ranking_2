import * as moment from 'moment';

export default class AdminService {

  async getResponse(url, data) {

    const res = await fetch(url, data);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return res.json();
  }

  // admin competitions functions

  async getCompetitions() {
    const response = await this.getResponse(`http://localhost:8080/admin/competitions`, {method: 'GET'});
    return response
      .sort((first, second) => (first.DATE < second.DATE) ? 1 : -1)
      .map(res => {
        return {
          id: res.ID,
          name: res.NAME,
          date: moment(res.DATE).format("YYYY-MM-DD"),
          runners: res.RUNNERS,
          status: res.STATUS,
          isAllowed: res.IS_ALLOWED,
          isAllowedUpdated: res.IS_ALLOWED,
          link: res.URL
        }
      });
  }

  async saveCompetition(data) {
    await this.getResponse(`http://localhost:8080/admin/competitions/updateCompetitionDetails`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: data})
    });
  }

  async addCompetition(data) {
    await this.getResponse(`http://localhost:8080/admin/competitions/addCompetition`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: data})
    });
  }

  async recalculateCompetitions(data) {
    await this.getResponse(`http://localhost:8080/admin/competitions/recalculate`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: data})
    });
  }

  async totalDropCompetitions() {
    await this.getResponse(`http://localhost:8080/admin/competitions/drop`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({})
    });
  }

  // admin runners functions
  async getRunners() {
    const response = await this.getResponse(`http://localhost:8080/admin/runners`, {method: 'GET'});
    return response.man
      .concat(response.woman)
      .sort((first, second) => (first.FULLNAME > second.FULLNAME) ? 1 : -1)
      .map(res => {
      return {
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
        checked: false
      }
    });
  }


}
