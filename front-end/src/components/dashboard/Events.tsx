import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Styled components
import { DashboardTitle } from './DashboardStyle';
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';

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
        <DashboardTitle>Today's overview</DashboardTitle>

        <TableWrapper>
          <Table> Total observations
            <TableHeader>Count </TableHeader>
            {/* { data.map( (element: any, index: number) => {
              return (
              <TableRow key={index}>
                <TableDetail key={index}> {element.eventType.value} </TableDetail>
              </TableRow>
              );
            })
            } */}
            <TableRow> 
              <TableDetail>Hi</TableDetail>
            </TableRow>
          </Table>
        </TableWrapper>

      </div>
    );
  }

}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Events);