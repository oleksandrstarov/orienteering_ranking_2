import React from 'react';
import AddMergedRunner from './add-merged-runner';

describe('Render merged runners', () => {
  let mockState, mockProps, wrapperShallow, wrapperMount;
  beforeEach(() => {
    mockState = {
      sex: 'W',
      team: 'Text',
    };
    mockProps = {
      currentRunner: {
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
      },
      checkedRunnersLength: 1,
      updateSingleRunner: (currentRunner) => {}
    };

    wrapperShallow = shallow(<AddMergedRunner {...mockProps}/>);
    wrapperMount = mount(<AddMergedRunner {...mockProps}/>);
  });


  it('Render merged runners', () => {
    expect(wrapperShallow.is('.add-merged-runners')).toBeTruthy();
  });

  it('Sex change', () => {
    wrapperShallow.setState({...mockState});
    expect(wrapperShallow.state('sex')).toEqual('W');
    wrapperShallow.instance().sexChange();
    expect(wrapperShallow.state('sex')).toEqual('M');
  });

  it('On team change', () => {
    wrapperShallow.setState({...mockState});
    expect(wrapperShallow.state('team')).toEqual('Text');
    wrapperShallow.instance().onTeamChange('New text');
    expect(wrapperShallow.state('team')).toEqual('New text');
  });

  it('Update single runner', () => {
    wrapperMount.setState({...mockState});
    expect(wrapperMount.prop('currentRunner').team).toEqual('ЛИЧНО');
    wrapperMount.instance().updateSingleRunner(wrapperMount.prop('currentRunner'));
    expect(wrapperMount.prop('currentRunner').team).toEqual('Text');
  });

  it('Component did mount',async () => {
    const componentDidMountSpy = jest.spyOn(AddMergedRunner.prototype, 'componentDidMount')
    mount(<AddMergedRunner {...mockProps}/>);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });

  it('Component will receive props', () => {
    wrapperMount.setState({...mockState});
    expect(wrapperMount.state('team')).toEqual('Text');
    wrapperMount.instance().componentWillReceiveProps();
    expect(wrapperMount.state('team')).toEqual('ЛИЧНО');
  });
});


