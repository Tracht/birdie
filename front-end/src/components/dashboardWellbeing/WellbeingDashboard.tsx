import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Import Components
import GeneralObservations from './GeneralObservations';
import MentalHealth from './MentalHealth';
import Mood from './Mood';
import PhysicalHealth from './PhysicalHealth';
import { DashboardTitle } from '../dashboard/DashboardStyle';

// Create the Dasboard Component
class WellbeingDashboard extends React.Component {

  render() {
    return(
    <div>
      <DashboardTitle>Wellbeing Summary </DashboardTitle> 
      <GeneralObservations /> 
      <MentalHealth />
      <PhysicalHealth />
      <Mood />
    </div>
    );
  }

}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(WellbeingDashboard);