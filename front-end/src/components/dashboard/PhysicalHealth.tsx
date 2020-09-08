import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


var data = [
  {"physical_health_note":"\"[redacted] is well and happy \"","utcDate":"2019-05-11","utcTime":"03:35"},
  {"physical_health_note":"\"[redacted] well \"","utcDate":"2019-05-11","utcTime":"07:20"},
  {"physical_health_note":"\"[redacted] well. \"","utcDate":"2019-05-11","utcTime":"07:09"}
]

// Typescript declarations 
interface PhysicalHealthProps {

}

interface PhysicalHealthState {
}

// Create the Dasboard Component
class PhysicalHealth extends React.Component<PhysicalHealthProps, PhysicalHealthState> {

  constructor(props: PhysicalHealthProps) {
    super(props);

  }

  render() {
    return(
      <div>
        <h1>Today's physical health observations</h1>
        <table>
          <tr>
            <th>Notes</th>
            <th>Time</th>
          </tr>
          {data.map((element: any) => {
            return (
              <tr>
                <td>{element.physical_health_note ? element.physical_health_note : "-"}</td>
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
export default connect(mapStateToProps, mapDispatchToProps)(PhysicalHealth);