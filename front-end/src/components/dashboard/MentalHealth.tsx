import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


var data = [
  {"mental_health_note":" ","utcDate":"2019-05-12","utcTime":"06:53"}
]

// Typescript declarations 
interface MentalHealthProps {

}

interface MentalHealthState {
}

// Create the Dasboard Component
class MentalHealth extends React.Component<MentalHealthProps, MentalHealthState> {

  constructor(props: MentalHealthProps) {
    super(props);

  }

  render() {
    return(
      <div>
        <h1>Today's mental health observations</h1>
        <table>
          <tr>
            <th>Notes</th>
            <th>Time</th>
          </tr>
          {data.map((element: any) => {
            return (
              <tr>
                <td>{element.mental_health_note ? element.mental_health_note : "-"}</td>
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
export default connect(mapStateToProps, mapDispatchToProps)(MentalHealth);