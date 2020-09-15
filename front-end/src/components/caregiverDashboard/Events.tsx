import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Styled components
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';

class Frequency {
    eventType: string;
    count: number;
    constructor( eventType: string, count: number ) {
      this.eventType = eventType.replace(/_/g, ' ');
      this.count = count;
    }
}

var newData = [
new Frequency('check_in', 9), 
new Frequency('check_out', 8),
new Frequency('fluid_intake_observation', 9),
new Frequency('food_intake_observation', 4),
new Frequency('general_observation', 4),
new Frequency('incontinence_pad_observation', 4),
new Frequency('mental_health_observation', 1),
new Frequency('mood_observation', 1),
new Frequency('regular_medication_taken', 9),
new Frequency('task_completed', 27),
new Frequency('task_completion_reverted', 1),
new Frequency('visit_completed', 8),
];

var validEvents = ['check in', 'check out', 'visit completed'];

// var data = [ 
//   {'eventType' : 'check_in', 'count' : 9}, 
//   {'eventType' : 'check_out', 'count' : 8},
//   {'eventType' : 'fluid_intake_observation', 'count' : 9},
//   {'eventType' : 'food_intake_observation', 'count' : 4},
//   {'eventType' : 'general_observation', 'count' : 4},
//   {'eventType' : 'incontinence_pad_observation', 'count' : 4},
//   {'eventType' : 'mental_health_observation', 'count' : 1},
//   {'eventType' : 'mood_observation', 'count' : 1},
//   {'eventType' : 'regular_medication_taken', 'count' : 9},
//   {'eventType' : 'task_completed', 'count' : 27},
//   {'eventType' : 'task_completion_reverted', 'count' : 1},
//   {'eventType' : 'visit_completed', 'count' : 8}
// ];

// // Typescript declarations 
// interface EventsProps {
// }
// interface EventsState {
// }

// // Create the Dasboard Component
// class Events extends React.Component<EventsProps, EventsState> {

class Events extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div>
        <TableWrapper>
          <Table>
            <TableHeader>Events</TableHeader>
            <TableHeader>Frequency </TableHeader>
            { newData.map((element: Frequency, index: number) => {

              if (validEvents.includes(element.eventType)) {
                return (
                  <TableRow key={index}>
                    <TableDetail key={index}> {element.eventType} </TableDetail>
                    <TableDetail key={index}> {element.count} </TableDetail>
                  </TableRow>
                );
              } else { 
                return null; 
                }
                   
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
export default connect(mapStateToProps, mapDispatchToProps)(Events);