import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Styles 
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';
// Utils
import { sortObjByProperty } from '../../utils';

class PhysicalData {
  note: string;
  utcDate: string;
  utcTime: string;

  constructor(note: string, utcDate: string, utcTime: string) {
    this.note = note.replace(/\s+(\W)/g, '$1');
    this.utcDate = utcDate; 
    this.utcTime = utcTime;
  }
}

var newData = [
  new PhysicalData('Walking around fine, using walker', '2019-05-12', '17:22'), 
  new PhysicalData('Was able to go up the stairs', '2019-05-12', '13:48'),
  new PhysicalData('Able to use toilet okay', '2019-05-12', '06:51'),
  new PhysicalData('Complained about hand pain - arthritis - may need to check meds', '2019-05-12', '09:51'),
];

// var data = [
//   {"physical_health_note":"\"[redacted] is well and happy \"","utcDate":"2019-05-11","utcTime":"03:35"},
//   {"physical_health_note":"\"[redacted] well \"","utcDate":"2019-05-11","utcTime":"07:20"},
//   {"physical_health_note":"\"[redacted] well. \"","utcDate":"2019-05-11","utcTime":"07:09"}
// ]

// Typescript declarations 
// interface PhysicalHealthProps {
// }
// interface PhysicalHealthState {
// }

// Create the Dasboard Component
// class PhysicalHealth extends React.Component<PhysicalHealthProps, PhysicalHealthState> {
class PhysicalHealth extends React.Component {
  // constructor(props: PhysicalHealthProps) {
  //   super(props);
  // }

  render() {
    return(
      <div>
          <TableWrapper>
            <Table>
              <TableHeader>Physical Health Observations</TableHeader>
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
export default connect(mapStateToProps, mapDispatchToProps)(PhysicalHealth);