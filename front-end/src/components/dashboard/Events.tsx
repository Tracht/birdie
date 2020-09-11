import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Styled components
import { DashboardTitle } from './DashboardStyle';
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';

var data = [ 
  {'eventType' : 'check_in', 'count' : 9}, 
  {'eventType' : 'check_out', 'count' : 8},
  {'eventType' : 'fluid_intake_observation', 'count' : 9},
  {'eventType' : 'food_intake_observation', 'count' : 4},
  {'eventType' : 'general_observation', 'count' : 4},
  {'eventType' : 'incontinence_pad_observation', 'count' : 4},
  {'eventType' : 'mental_health_observation', 'count' : 1},
  {'eventType' : 'mood_observation', 'count' : 1},
  {'eventType' : 'regular_medication_taken', 'count' : 9},
  {'eventType' : 'task_completed', 'count' : 27},
  {'eventType' : 'task_completion_reverted', 'count' : 1},
  {'eventType' : 'visit_completed', 'count' : 8}
];

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
        <DashboardTitle>Snapshot: Total Observations</DashboardTitle>

        <TableWrapper>
          <Table>
            <TableHeader>Event </TableHeader>
            <TableHeader>Count </TableHeader>
            { data.map((element: Object, index: number) => {
              // Object.keys(element).forEach(key: string => {
                let objKey1 = 'eventType'; 
                let objKey2 = 'count'; 
                return (
                  <TableRow key={index}>
                    <TableDetail key={index}> {element[objKey1]} </TableDetail>
                    <TableDetail key={index}> {element[objKey2]} </TableDetail>
                  </TableRow>
                );
              // }
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