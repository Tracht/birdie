import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Import Components
import GeneralObservations from './GeneralObservations';
import MentalHealth from './MentalHealth';
import Mood from './Mood';
import PhysicalHealth from './PhysicalHealth';
import CaregiverVisits from './CaregiverVisits';
import CaregiverVisitTimes from './CaregiverVisitTimes';
import Events from './Events';

// Create the Dasboard Component
class Dashboard extends React.Component {

  render() {

    return(
      <div>
        <h2>Date {}</h2>
        <h1>Wellbeing Summary </h1> 
        <GeneralObservations /> 
        <MentalHealth />
        <Mood />
        <PhysicalHealth />
        <h1>Administrative Summary </h1> 
        <Events  />
        <CaregiverVisits />
        <CaregiverVisitTimes />
      </div>
    );
  }

}
const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);