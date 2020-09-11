import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import CaregiverVisits from './CaregiverVisits';
import CaregiverCheckInCheckOut from './CaregiverCheckInCheckOut';
import Events from './Events';
// import Mood from './Mood'
// import MentalHealth from './MentalHealth'
// import PhysicalHealth from './PhysicalHealth'
// import GeneralObservations from './GeneralObservations'

// Create the Dasboard Component
class Dashboard extends React.Component {

  render() {

    return(
      <div>
        <h1>Dashboard Summary </h1> 
        <h2>Date {}</h2>
        <CaregiverVisits />
        <CaregiverCheckInCheckOut />
        <Events  />
        {/* 
        <Mood />
        <MentalHealth />
        <PhysicalHealth />
        <GeneralObservations /> */}
      </div>
    );
  }

}
const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);