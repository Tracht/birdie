import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


var data = { "result": 
  [ 
  {"note":"[redacted] ok on arrival pad was dry heated up tea gave her baclofen couldn’t give paracetamol not enough gap washed up and put away had a nice chat with [redacted] freshen up drinks all seem ok on leave [redacted] eating and watching tv ","utcDate":"2019-05-12","utcTime":"02:19"},
  {"note":"Assisted with pad change . Changed bedding put wash on . Had a chat ","utcDate":"2019-05-12","utcTime":"07:22"},
  {"note":"Assisted with pad change gave meds left [redacted] to complete visit . ","utcDate":"2019-05-12","utcTime":"11:48"},
  {"note":"Assisted with pad change.  And putting to bed ","utcDate":"2019-05-12","utcTime":"06:51"}
  ]
}
// Typescript declarations 
interface GeneralObservationProps {

}

interface GeneralObservationState {
}

// Create the Dasboard Component
class GeneralObservations extends React.Component<GeneralObservationProps, GeneralObservationState> {

  constructor(props: GeneralObservationProps) {
    super(props);

  }

  render() {
    return(
      <div>
        <h1>Today's general observations</h1>
        <table>
          <tr>
            <th>Notes</th>
            <th>Time</th>
          </tr>
          {data.map((element: any) => {
            return (
              <tr>
                <td>{element.note ? element.note : "-"}</td>
                <td>{element.utcTime}</td>
              </tr>
            );
          })}
        </table>
      </div>
      

    );
  }

}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(GeneralObservations);