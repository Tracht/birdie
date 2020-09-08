import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

var data = { "eventTypeFreq": [ 
  {"eventType":"check_in","count":9},{"eventType":"check_out","count":8},
  {"eventType":"fluid_intake_observation","count":9},
  {"eventType":"food_intake_observation","count":4},
  {"eventType":"general_observation","count":4},
  {"eventType":"incontinence_pad_observation","count":4},
  {"eventType":"mental_health_observation","count":1},
  {"eventType":"mood_observation","count":1},
  {"eventType":"regular_medication_taken","count":9},
  {"eventType":"task_completed","count":27},
  {"eventType":"task_completion_reverted","count":1},
  {"eventType":"visit_completed","count":8}
  ]
}

// Typescript declarations 
interface EventsProps {

}

interface EventsState {
}

// Create the Dasboard Component
class Events extends React.Component<EventsProps, EventsState> {

  constructor(props: EventsProps) {
    super(props);

  }

  render() {
    return(
      <div>
        <h1>Today's overview</h1>

        <h2>Tasks completed: {} </h2>

        <p>Fluid observations: {} </p>
        <p>Food observations: {} </p>

        <h2>General observations: {} </h2>
        <h2>Wellbeing observations (mood, mental, physical): {} </h2>

        <p>Mood observations: {} </p>
        <p>Mental health observations: {} </p>
        <p>Physical health observations: {} </p>

        <h2>Medication summary</h2>
        <p>Meds partially taken: {} </p>
        <p>Meds not taken taken: {} </p>
        <p>Meds taken: {} </p>

      </div>
    );
  }

}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Events);