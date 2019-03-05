import React from 'react';
import CheckedRunners from './checked-runners';
import TableRunners from "../table-runners/table-runners.test";

describe('Render merged runners', () => {

  const mockState = {
    radioButtonState: '',
    currentRunner: {},
  };
  const mockProps = {
    checkedRunners: [
      {
        checked: true,
        curPlace: 27,
        curRank: 22.27,
        id: 2668,
        isVisible: true,
        name: "Иван Иванов",
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
        isVisible: true,
        name: "Иван Иванов",
        place: 41,
        placeDiff: 0,
        points: 35.64,
        pointsDiff: 0,
        sex: "W",
        subjective: "Y",
        team: "ЛИЧНО",
      }
    ],
    addRunnerToMerge: (checkedRunners) => {
    }
  };

  const wrapper = shallow(<CheckedRunners {...mockProps}/>);

  it('Render checked runners', () => {
    expect(wrapper.is('.checked-runners')).toBeTruthy();
  });

  it('Radio button change', () => {
    const wrapper = mount(<CheckedRunners {...mockProps}/>);
    wrapper.setState({...mockState});
    wrapper.instance().radioButtonChange({target: {value: '2669'}});
    expect(wrapper.state('currentRunner').curPlace).toEqual(41);
  });

  it('Component will receive props', () => {
    const wrapper = mount(<CheckedRunners {...mockProps}/>);
    wrapper.setState({
      radioButtonState: '7',
      currentRunner: {name: 'Иван'}
    });
    expect(wrapper.state('radioButtonState')).toEqual('7');
    wrapper.instance().componentWillReceiveProps({checkedRunners: []});
    expect(wrapper.state('radioButtonState')).toEqual('');
  });

  it('Status change', () => {
    const wrap = shallow(<CheckedRunners {...mockProps}/>);
    const spy = jest.spyOn(wrap.instance(), "radioButtonChange");
    wrapper.instance().forceUpdate();
    wrap.find('.controls-padding').first().simulate('change', {target: {value: 3242}}, spy);
    expect(spy).toBeCalledWith({target: {value: 3242}});
  });
});
