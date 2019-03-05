import React from 'react';
import AdminRunners from './admin-runners';

describe('Render admin runners', () => {

  const mockState = {
    mergedRunners: [
      {
        duplicates: [
          {
            checked: true,
            curPlace: 42,
            curRank: 32.16,
            id: 2652,
            isVisible: false,
            name: "Иванов Иван",
            place: 42,
            placeDiff: 0,
            points: 32.16,
            pointsDiff: 0,
            sex: "W",
            subjective: "Y",
            team: "ЛИЧНО"
          }, {
            checked: true,
            curPlace: 22,
            curRank: 18.34,
            id: 2647,
            isVisible: false,
            name: "Иванов Иван",
            place: 22,
            placeDiff: 0,
            points: 18.34,
            pointsDiff: 0,
            sex: "W",
            subjective: "Y",
            team: "ХАРКІВJJ"
          }
        ],
        main: {
          checked: true,
          curPlace: 22,
          curRank: 18.34,
          id: 2647,
          isVisible: false,
          name: "Иванов Иван",
          place: 22,
          placeDiff: 0,
          points: 18.34,
          pointsDiff: 0,
          sex: "W",
          subjective: "Y",
          team: "ХАРКІВJJ"
        }
      }
    ],
    checkedRunners: [{
      checked: true,
      curPlace: 44,
      curRank: 36.97,
      id: 2525,
      isVisible: true,
      name: "Иванов Иван",
      place: 44,
      placeDiff: 0,
      points: 36.97,
      pointsDiff: 0,
      sex: "W",
      subjective: "Y",
      team: "ХНУПСGGG"
    }, {
      checked: true,
      curPlace: 44,
      curRank: 36.97,
      id: 2995,
      isVisible: true,
      name: "Иванов Иван",
      place: 44,
      placeDiff: 0,
      points: 36.97,
      pointsDiff: 0,
      sex: "W",
      subjective: "Y",
      team: "ХНУПСGGG"
    }, {
      checked: true,
      curPlace: 23,
      curRank: 18.5,
      id: 2550,
      isVisible: true,
      name: "Иванов Иван",
      place: 23,
      placeDiff: 0,
      points: 18.5,
      pointsDiff: 0,
      sex: "W",
      subjective: "Y",
      team: "КСО О-КОМПАС"
    }],
    allRunners: [{
      checked: true,
      curPlace: 42,
      curRank: 32.16,
      id: 2652,
      isVisible: false,
      name: "Иванов Иван",
      place: 42,
      placeDiff: 0,
      points: 32.16,
      pointsDiff: 0,
      sex: "W",
      subjective: "Y",
      team: "ЛИЧНО"
    }, {
      checked: true,
      curPlace: 22,
      curRank: 18.34,
      id: 2647,
      isVisible: false,
      name: "Иванов Иван",
      place: 22,
      placeDiff: 0,
      points: 18.34,
      pointsDiff: 0,
      sex: "W",
      subjective: "Y",
      team: "ХАРКІВJJ"
    }],
  };
  const wrapper = shallow(<AdminRunners/>);

  it('Render admin runners', () => {
    expect(wrapper.is('.admin-runners')).toBeTruthy();
  });

  it('Change runner checked status after check', () => {
    wrapper.setState({...mockState});
    expect(wrapper.state('allRunners')[0].checked).toEqual(true);
    wrapper.instance().statusChange(2652);
    expect(wrapper.state('allRunners')[0].checked).toEqual(false);
  });

  it('Add runner to merge', () => {
    wrapper.setState({...mockState});
    expect(wrapper.state('checkedRunners').length).toEqual(2);
    wrapper.instance().addRunnerToMerge(2525);
    expect(wrapper.state('checkedRunners').length).toEqual(0);
  });

  it('Cancel merged runners', () => {
    wrapper.setState({...mockState});
    expect(wrapper.state('mergedRunners').length).toEqual(2);
    wrapper.instance().cancelMergedRunners();
    expect(wrapper.state('mergedRunners').length).toEqual(0);
  });

  it('Save merged runners', () => {
    wrapper.setState({...mockState});
    expect(wrapper.state('mergedRunners').length).toEqual(2);
    wrapper.instance().saveMergedRunners();
    expect(wrapper.state('mergedRunners').length).toEqual(0);
  });

  it('deleteMergedRunner', () => {
    wrapper.setState({...mockState});
    expect(wrapper.state('mergedRunners').length).toEqual(2);
    wrapper.instance().deleteMergedRunner(2525);
    expect(wrapper.state('mergedRunners').length).toEqual(1);
  });
});
