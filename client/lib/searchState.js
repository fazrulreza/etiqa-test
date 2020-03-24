import {
  withState, pure, compose, withHandlers,
} from 'recompose';
// import { } from '../configuration/parameter';

const withSearchState = compose(
  withState('skillsets', 'setSkillsets', 'ALL'),
  // withHandlers({
  //   onReset: (
  //     {
  //       setState, setSector, setYear, setSize, setRevenue, setDivision, setMsic, setChoice,
  //     },
  //   ) => () => {
  //     setSector(defaultSector);
  //     setYear(defaultYear);
  //     setState(defaultState);
  //     setSize(defaultSize);
  //     setRevenue(defaultRevenue);
  //     setChoice(divisionText);
  //     setDivision('');
  //     setMsic('');
  //   },
  // }),
  pure,
);

export default withSearchState;
