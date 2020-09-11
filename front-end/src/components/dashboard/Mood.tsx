import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// var data = [
//   {"mood":"\"happy\"","note":null,"utcDate":"2019-05-12","utcTime":"04:20"}
// ]

// Typescript declarations 
interface MoodProps {

}

interface MoodState {
}

// Create the Dasboard Component
class Mood extends React.Component<MoodProps, MoodState> {

  constructor(props: MoodProps) {
    super(props);

  }

  render() {
    return(
      // <div>
        <h1>Today's mood observations</h1>
      //   <table>
      //     <tr>
      //       <th>Mood</th>
      //       <th>Notes</th>
      //       <th>Time</th>
      //     </tr>
      //     {data.map((element: any) => {
      //       return (
      //         <tr>
      //           <td>{element.mood ? element.mood : "-"}</td>
      //           <td>{element.note ? element.note : "-"}</td>
      //           <td>{element.utcTime}</td>
      //         </tr>
      //       );
      //     })}
      //   </table>
      // </div>
    );
  }

}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Mood);