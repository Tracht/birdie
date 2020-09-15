import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Import components
import Button from '@App/components/ButtonStyle';
import WellbeingDashboard from '../dashboardWellbeing/WellbeingDashboard';
import CaregiverDashboard from '../caregiverDashboard/CaregiverDashboard';

// Type Declaration 
interface DashboardState {
  whatIsDisplayed?: EventTarget & HTMLButtonElement | string;
  clickHandler?: string;
}
interface DashboardProps {
  whatIsDisplayed?: EventTarget & HTMLButtonElement | string;
  clickHandler?: string;
}

// Create the Dasboard Component
class Dashboard extends React.Component<DashboardState, DashboardProps> {

  constructor(props: DashboardProps) {
    super(props);
    this.state = { whatIsDisplayed: 'wellbeing' };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.setState({
      whatIsDisplayed: event.currentTarget.value
    });
  }

  render() {
    const whatIsDisplayed = this.state.whatIsDisplayed;

    if ( whatIsDisplayed === 'wellbeing' ) { 
      return (
        <div>
          <Button onClick={this.clickHandler} name="caregiver" value="caregiver"> Caregiver data </Button>
          <WellbeingDashboard />
        </div>
      );
    } else if ( whatIsDisplayed === 'caregiver' ) { 
      return (
        <div>
          <Button onClick={this.clickHandler} name="wellbeing" value="wellbeing"> Wellbeing summary </Button>
          <CaregiverDashboard />
        </div>
      ); 
    } else {
      return null;
    } 
  }

}
const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);