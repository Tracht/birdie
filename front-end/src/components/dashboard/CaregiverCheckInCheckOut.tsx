import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// var data = { "result" : [
//   {"event_type":"check_in","caregiver_id":"f7a00df5-bbc4-4ad7-9918-c07e16e709f6","utcTime":"02:03"},
//   {"event_type":"check_in","caregiver_id":"868ffde9-b069-4af5-8835-c4ac4e72e4b5","utcTime":"02:06"},
//   {"event_type":"check_out","caregiver_id":"868ffde9-b069-4af5-8835-c4ac4e72e4b5","utcTime":"02:30"},
//   {"event_type":"check_out","caregiver_id":"f7a00df5-bbc4-4ad7-9918-c07e16e709f6","utcTime":"02:30"},
//   {"event_type":"check_in","caregiver_id":"f7a00df5-bbc4-4ad7-9918-c07e16e709f6","utcTime":"06:21"},
//   {"event_type":"check_in","caregiver_id":"5c9090ab-7d5e-4a72-8bf7-197190ad4c98","utcTime":"06:34"},
//   {"event_type":"check_in","caregiver_id":"3cacba0a-6041-11e9-b63f-06a80bfbb33e","utcTime":"06:40"},
//   {"event_type":"check_in","caregiver_id":"3cacba0a-6041-11e9-b63f-06a80bfbb33e","utcTime":"06:43"},
//   {"event_type":"check_out","caregiver_id":"3cacba0a-6041-11e9-b63f-06a80bfbb33e","utcTime":"06:53"},
//   {"event_type":"check_out","caregiver_id":"f7a00df5-bbc4-4ad7-9918-c07e16e709f6","utcTime":"06:54"},
//   {"event_type":"check_in","caregiver_id":"3cacba0a-6041-11e9-b63f-06a80bfbb33e","utcTime":"07:20"},
//   {"event_type":"check_out","caregiver_id":"3cacba0a-6041-11e9-b63f-06a80bfbb33e","utcTime":"07:23"},
//   {"event_type":"check_out","caregiver_id":"5c9090ab-7d5e-4a72-8bf7-197190ad4c98","utcTime":"07:25"},
//   {"event_type":"check_in","caregiver_id":"5c9090ab-7d5e-4a72-8bf7-197190ad4c98","utcTime":"11:26"},
//   {"event_type":"check_in","caregiver_id":"3cacba0a-6041-11e9-b63f-06a80bfbb33e","utcTime":"11:27"},
//   {"event_type":"check_out","caregiver_id":"3cacba0a-6041-11e9-b63f-06a80bfbb33e","utcTime":"11:48"},
//   {"event_type":"check_out","caregiver_id":"5c9090ab-7d5e-4a72-8bf7-197190ad4c98","utcTime":"11:55"}
//   ]
// }

// Typescript declarations 
interface CaregiverCheckInCheckOutProps {

}

interface CaregiverCheckInCheckOutState {
}

// Create the Dasboard Component
class CaregiverCheckInCheckOut extends React.Component<CaregiverCheckInCheckOutProps, CaregiverCheckInCheckOutState> {

  constructor(props: CaregiverCheckInCheckOutProps) {
    super(props);

  }

  // componentDidMount() {
  //   this.props.getData("http://localhost:8000/caregiver-checkin-checkout");
  // }

  render() {
    return(
      // <div>
        <h1>Today's caregiver visits, check-in and check-out times</h1>
      //   <table>
      //     <tr>
      //       <th>Event type</th> 
      //       <th>Caregiver ID</th>
      //       <th>Time</th>
      //     </tr>
      //     {data.map((element: any) => {
      //       return (
      //         <tr>
      //           <td>{element.event_type}</td>
      //           <td>{element.caregiver_id}</td>
      //           <td>{element.utcTime}</td>
      //         </tr>
      //       );
      //     })}
      //   </table>
      // </div>
    );
  }

}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(CaregiverCheckInCheckOut);