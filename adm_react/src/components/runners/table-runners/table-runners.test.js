import React from 'react';
import TableRunners from './table-runners';

describe('Render merged runners', () => {
  const mockProps = {
    allRunners: [{
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
    statusChange: jest.fn(),
  };

  const wrapper = shallow(<TableRunners {...mockProps}/>);

  it('Render checked runners', () => {
    expect(wrapper.is('.table-runners')).toBeTruthy();
  });

  it('Status change', () => {
    const wrap = shallow(<TableRunners {...mockProps}/>);
    const spyWrap = jest.spyOn(mockProps, 'statusChange');
    wrap.find('.controls-padding').first().simulate('change', {target: {value: 3242}});
    expect(spyWrap).toHaveBeenCalled();
  });
});
