import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Styles 
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';
import { DashboardTitle } from './DashboardStyle';
// Utils
import { sortObjByProperty } from '../../utils';

// var data = [ 
//   {'note' : 'Changed bedding put wash on . Had a chat ', 'utcDate' : '2019-05-12', 'utcTime' : '07:22'}, 
//   {'note' : 'Gave meds left [redacted] to complete visit . ', 'utcDate' : '2019-05-12', 'utcTime' : '11:48'}, 
//   {'note' : 'Assisted with pad change.  And putting to bed ', 'utcDate' : '2019-05-12', 'utcTime' : '06:51'}
// ]

class GeneralObs {
  note: string;
  utcDate: string;
  utcTime: string;

  constructor(note: string, utcDate: string, utcTime: string) {
    this.note = note;
    this.utcDate = utcDate; 
    this.utcTime = utcTime;
  }
}

var newData = [
  new GeneralObs('Changed bedding put wash on . Had a chat', '2019-05-12', '07:22'), 
  new GeneralObs('Gave meds left [redacted] to complete visit .', '2019-05-12', '11:48'),
  new GeneralObs('Assisted with pad change.  And putting to bed', '2019-05-12', '06:51'),
];

// Typescript declarations 
// interface GeneralObservationProps {
// }
// interface GeneralObservationState {
// }

// Create the Dasboard Component
// class GeneralObservations extends React.Component<GeneralObservationProps, GeneralObservationState> {
class GeneralObservations extends React.Component {

  // constructor(props: GeneralObservationProps) {
  // constructor() {
  //   super(props);
  // }

  render() {
    return(
      <div>
        <DashboardTitle>General observations</DashboardTitle>
          <TableWrapper>
            <Table>
              <TableHeader>Notes</TableHeader>
              <TableHeader>Time</TableHeader>
              { newData.sort(sortObjByProperty('utcTime')).map( (element, index) => {
                return (
                <TableRow key={index}>
                  <TableDetail key={index}> {element.note} </TableDetail>
                  <TableDetail key={index}> {element.utcTime} </TableDetail>
                </TableRow>
                );
              })
              }
            </Table>
          </TableWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(GeneralObservations);