import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Styled Components
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';
import { DashboardTitle } from './DashboardStyle';
// Utils
import { sortObjByProperty } from '../../utils';

class VisitTimes {
    eventType: string;
    caregiverId: string;
    utcTime: string;
    constructor( eventType: string, caregiverId: string, utcTime: string) {
      this.eventType = eventType;
      this.caregiverId = caregiverId;
      this.utcTime = utcTime;
    }
}

var newData = [
  new VisitTimes('check_in', 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6', '02:03' ), 
  new VisitTimes('check_in', '868ffde9-b069-4af5-8835-c4ac4e72e4b5', '02:06'),
  new VisitTimes('check_out', '868ffde9-b069-4af5-8835-c4ac4e72e4b5', '02:30'),
  new VisitTimes('check_out', 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6', '02:30'),
  new VisitTimes('check_in', 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6', '06:21'),
  new VisitTimes('check_in', '5c9090ab-7d5e-4a72-8bf7-197190ad4c98', '06:34'),
  new VisitTimes('check_in', '3cacba0a-6041-11e9-b63f-06a80bfbb33e', '06:40'),
  new VisitTimes('check_in', '3cacba0a-6041-11e9-b63f-06a80bfbb33e', '06:43'),
  new VisitTimes('check_out', '3cacba0a-6041-11e9-b63f-06a80bfbb33e', '06:53'),
  new VisitTimes('check_out', 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6', '06:54'),
  new VisitTimes('check_in', '3cacba0a-6041-11e9-b63f-06a80bfbb33e', '07:20'),
  new VisitTimes('check_out', '3cacba0a-6041-11e9-b63f-06a80bfbb33e', '07:23'),
  new VisitTimes('check_out', '5c9090ab-7d5e-4a72-8bf7-197190ad4c98', '07:25'), 
  new VisitTimes('check_in', '5c9090ab-7d5e-4a72-8bf7-197190ad4c98', '11:26'), 
  new VisitTimes('check_in', '3cacba0a-6041-11e9-b63f-06a80bfbb33e', '11:27'), 
  new VisitTimes('check_out', '3cacba0a-6041-11e9-b63f-06a80bfbb33e', '11:48'), 
  new VisitTimes('check_out', '5c9090ab-7d5e-4a72-8bf7-197190ad4c98', '11:55'),
];

// var data = [
// {'event_type' : 'check_in', 'caregiver_id' : 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6', 'utcTime' : '02:03'}, 
// {'event_type' : 'check_in', 'caregiver_id' : '868ffde9-b069-4af5-8835-c4ac4e72e4b5', 'utcTime' : '02:06'}, 
// {'event_type' : 'check_out', 'caregiver_id' : '868ffde9-b069-4af5-8835-c4ac4e72e4b5', 'utcTime' : '02:30'}, 
// {'event_type' : 'check_out', 'caregiver_id' : 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6', 'utcTime' : '02:30'}, 
// {'event_type' : 'check_in', 'caregiver_id' : 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6', 'utcTime' : '06:21'}, 
// {'event_type' : 'check_in', 'caregiver_id' : '5c9090ab-7d5e-4a72-8bf7-197190ad4c98', 'utcTime' : '06:34'}, 
// {'event_type' : 'check_in', 'caregiver_id' : '3cacba0a-6041-11e9-b63f-06a80bfbb33e', 'utcTime' : '06:40'}, 
// {'event_type' : 'check_in', 'caregiver_id' : '3cacba0a-6041-11e9-b63f-06a80bfbb33e', 'utcTime' : '06:43'}, 
// {'event_type' : 'check_out', 'caregiver_id' : '3cacba0a-6041-11e9-b63f-06a80bfbb33e', 'utcTime' : '06:53'}, 
// {'event_type' : 'check_out', 'caregiver_id' : 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6', 'utcTime' : '06:54'}, 
// {'event_type' : 'check_in', 'caregiver_id' : '3cacba0a-6041-11e9-b63f-06a80bfbb33e', 'utcTime' : '07:20'}, 
// {'event_type' : 'check_out', 'caregiver_id' : '3cacba0a-6041-11e9-b63f-06a80bfbb33e', 'utcTime' : '07:23'}, 
// {'event_type' : 'check_out', 'caregiver_id' : '5c9090ab-7d5e-4a72-8bf7-197190ad4c98', 'utcTime' : '07:25'}, 
// {'event_type' : 'check_in', 'caregiver_id' : '5c9090ab-7d5e-4a72-8bf7-197190ad4c98', 'utcTime' : '11:26'}, 
// {'event_type' : 'check_in', 'caregiver_id' : '3cacba0a-6041-11e9-b63f-06a80bfbb33e', 'utcTime' : '11:27'}, 
// {'event_type' : 'check_out', 'caregiver_id' : '3cacba0a-6041-11e9-b63f-06a80bfbb33e', 'utcTime' : '11:48'}, 
// {'event_type' : 'check_out', 'caregiver_id' : '5c9090ab-7d5e-4a72-8bf7-197190ad4c98', 'utcTime' : '11:55'}
//   ];  

// Typescript declarations 
// interface CaregiverCheckInCheckOutProps {
// }
// interface CaregiverCheckInCheckOutState {
// }

// Create the Dasboard Component
// class CaregiverCheckInCheckOut extends React.Component<CaregiverCheckInCheckOutProps ,  
// CaregiverCheckInCheckOutState> {

class CaregiverVisitTimes extends React.Component {

  // constructor(props :  CaregiverCheckInCheckOutProps) {
  //   super(props);
  // }
  // componentDidMount() {
  //   this.props.getData('http : //localhost : 8000/caregiver-checkin-checkout');
  // }

  render() {
    return(
      <div>
      <DashboardTitle>Visits</DashboardTitle>
        <TableWrapper>
          <Table>
            <TableHeader>Caregiver ID</TableHeader>
            <TableHeader>Check in</TableHeader>
            <TableHeader>Check out</TableHeader>
            { newData.sort(sortObjByProperty('caregiver_id')).map( (element) => {
              return (
              <TableRow key={element.caregiverId}>
                <TableDetail key={element.caregiverId}> {element.caregiverId.substring(0, 8)}... </TableDetail>
                <TableDetail key={element.caregiverId}> {element.utcTime} </TableDetail>
                <TableDetail key={element.caregiverId}> {element.utcTime} </TableDetail>
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

const mapStateToProps = (state: RootState, ownProps:  object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(CaregiverVisitTimes);