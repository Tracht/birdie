import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Styles 
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';
// Utils
import { sortObjByProperty } from '../../utils';

class MentalHealthData {
  mentalHealthNote: string;
  utcDate: string;
  utcTime: string;
  constructor(mentalHealthNote: string, utcDate: string, utcTime: string) {
    this.mentalHealthNote = mentalHealthNote;
    this.utcDate = utcDate; 
    this.utcTime = utcTime;
  }
}

var newData = [
  new MentalHealthData('Seemed in good spirits', '2019-05-12', '07:22'), 
  new MentalHealthData('Very talkative, jovial', '2019-05-12', '11:48'),
  new MentalHealthData('Seemed happy - received phone call from granddaughter', '2019-05-12', '06:51'),
];

// var data = [
//   {"mental_health_note":" ","utcDate":"2019-05-12","utcTime":"06:53"}
// ]

// Typescript declarations 
// interface MentalHealthProps {
// }
// interface MentalHealthState {
// }

// Create the Dasboard Component
// class MentalHealth extends React.Component<MentalHealthProps, MentalHealthState> {
class MentalHealth extends React.Component {
  // constructor(props: MentalHealthProps) {
  //   super(props);

  // }

  render() {
    return(
      <div>
          <TableWrapper>
            <Table>
              <TableHeader>Mental Health Observations</TableHeader>
              <TableHeader>Time</TableHeader>
              { newData.sort(sortObjByProperty('utcTime')).map( (element, index) => {
                return (
                <TableRow key={index}>
                  <TableDetail key={index}> {element.mentalHealthNote} </TableDetail>
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
export default connect(mapStateToProps, mapDispatchToProps)(MentalHealth);