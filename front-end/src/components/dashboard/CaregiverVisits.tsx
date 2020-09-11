import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';
import { DashboardTitle } from './DashboardStyle';

var data = [ 
  { 'count' : 3, 'caregiver_id' : '3cacba0a-6041-11e9-b63f-06a80bfbb33e' },
  { 'count' : 2, 'caregiver_id' : '5c9090ab-7d5e-4a72-8bf7-197190ad4c98' },
  { 'count' : 1, 'caregiver_id' : '868ffde9-b069-4af5-8835-c4ac4e72e4b5' },
  { 'count' : 2, 'caregiver_id' : 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6' }
  ]; 
  
// Typescript declarations 
// interface CaregiverVisitsProps {
// }

// interface CaregiverVisitsState {
// }

// Create the Dasboard Component
class CaregiverVisits extends React.Component {

  // constructor() {
  //   super();
  // }

  // componentDidMount() {
  //   this.props.getData("http://localhost:8000/completed-visits");
  // }

  render() {
    return(

      <div>
        <DashboardTitle>Frequency of caregiver visits</DashboardTitle>
          <TableWrapper>
            <Table>
              <TableHeader>Number of Visits</TableHeader>
              <TableHeader>Caregiver ID</TableHeader>
              { data.map( (element, index) => {
                return (
                <TableRow key={index}>
                  <TableDetail key={index}> {element.count} </TableDetail>
                  <TableDetail key={index}> {element.caregiver_id.substring(0, 3)}... </TableDetail>
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
export default connect(mapStateToProps, mapDispatchToProps)(CaregiverVisits);