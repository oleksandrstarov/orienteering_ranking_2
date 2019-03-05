import React from 'react';
import MergedRunnersList from './merged-runners-list';

describe('Render merged runners', () => {
  const mockState = {};
  const mockProps = {
    mergedRunners: [{
      duplicates: [{
        checked: true,
        curPlace: 27,
        curRank: 22.27,
        id: 2668,
        isVisible: false,
        name: "Иванов Петр",
        place: 27,
        placeDiff: 0,
        points: 22.27,
        pointsDiff: 0,
        sex: "W",
        subjective: "Y",
        team: "ХНУПС",
      }, {
        checked: true,
        curPlace: 41,
        curRank: 35.64,
        id: 2669,
        isVisible: false,
        name: "Иванов Иван",
        place: 41,
        placeDiff: 0,
        points: 35.64,
        pointsDiff: 0,
        sex: "W",
        subjective: "Y",
        team: "ЛИЧНО",
      }],
      main: {
        checked: true,
        curPlace: 41,
        curRank: 35.64,
        id: 2669,
        isVisible: false,
        name: "Иванов Иван",
        place: 41,
        placeDiff: 0,
        points: 35.64,
        pointsDiff: 0,
        sex: "W",
        subjective: "Y",
        team: "ЛИЧНО",
      }
    }],
    cancelMergedRunners: jest.fn(),
    saveMergedRunners: jest.fn(),
    deleteMergedRunner: jest.fn(),
  };

  const wrapper = shallow(<MergedRunnersList {...mockProps}/>);

  it('Render checked runners', () => {
    expect(wrapper.is('.merged-runners-list')).toBeTruthy();
  });

  it('Delete merged runner', () => {
    const wrap = shallow(<MergedRunnersList {...mockProps}/>);
    const spyWrap = jest.spyOn(mockProps, 'deleteMergedRunner');
    wrap.find('.trash-button').simulate('click');
    expect(spyWrap).toHaveBeenCalled();
  });

  it('Cancel merged runners', () => {
    const wrap = shallow(<MergedRunnersList {...mockProps}/>);
    const spyWrap = jest.spyOn(mockProps, 'cancelMergedRunners');
    wrap.find('.cancel').simulate('click');
    expect(spyWrap).toHaveBeenCalled();
  });

  it('Save merged runners', () => {
    const wrap = shallow(<MergedRunnersList {...mockProps}/>);
    const spyWrap = jest.spyOn(mockProps, 'saveMergedRunners');
    wrap.find('.save').simulate('click');
    expect(spyWrap).toHaveBeenCalled();
  });
});
