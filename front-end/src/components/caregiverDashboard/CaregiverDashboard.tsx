import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Import Components
import CaregiverVisits from './CaregiverVisits';
import Events from './Events';
import CaregiverVisitTimes from './CaregiverVisitTimes';
import { DashboardTitle } from '../dashboard/DashboardStyle';

// Create the Dasboard Component
class CaregiverDashboard extends React.Component {

  render() {
    return(
    <div>
      <DashboardTitle>Caregiver Summary </DashboardTitle> 
      <CaregiverVisits />
      <CaregiverVisitTimes />
      <Events /> 
    </div>
    );
  }

}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(CaregiverDashboard);